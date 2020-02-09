require "Note"

class EditorController < ApplicationController
  def index
  end

  def save_note
      note = Note.new(title: params[:title], text: params[:text])
      note.save
  end
end
