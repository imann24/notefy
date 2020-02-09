const axios = require("axios");
const Quill = require("quill");

let editor;
let title;

const saveNote = () => {
    axios.post("/note", {
        title: title.value,
        text: editor.getText()
    });
};

window.onload = (event) => {
    editor = new Quill('#editor', {
        theme: 'snow',
    });
    title = document.getElementById("title");
    const saveButton = document.getElementById("save");
    saveButton.addEventListener("click", saveNote);
};
