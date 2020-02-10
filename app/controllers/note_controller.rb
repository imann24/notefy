class NoteController < ApplicationController
    def index
        @notes = Note.all
    end

    def create
        note = Note.new(title: params[:title], text: params[:text])
        note.save
    end

    def edit
        @note = Note.find(params[:id])
    end

    def update
        @note = Note.find(params[:id])
        @note.update(params.permit(:id, :note, :title, :text))
    end
end
