const axios = require("axios");
const Quill = require("quill");

let editor;
let title;
let resourceId;

const saveNote = () => {
    const payload = {
        title: title.value,
        text: editor.getText()
    };
    if (resourceId) {
        axios.patch(`/note/${resourceId}`, payload);
    } else {
        axios.post("/note", payload);
        console.log("creating new note");
    }
};

const setupEditor = () => {
    const previousToolBars = document.getElementsByClassName("ql-toolbar");
    for (const toolbar of previousToolBars) {
        toolbar.remove();
    };
    editor = new Quill('#editor', {
        theme: 'snow',
    });
    resourceId = document.getElementById("hidden-id");
    let existingText = document.getElementById("hidden-text");
    if (resourceId && existingText) {
        resourceId = resourceId.innerText;
        existingText = existingText.innerText;
        editor.setText(existingText);
    }
    title = document.getElementById("title");
}

const setupSaveButton = () => {
    const saveButton = document.getElementById("save");
    saveButton.addEventListener("click", saveNote);
}

setupEditor();
setupSaveButton();
