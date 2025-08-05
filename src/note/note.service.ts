import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async createNote(noteData: Partial<Note>): Promise<Note> {
    if (!noteData.title || !noteData.content || !noteData.date) {
      throw new Error('Missing required fields: title, content, or date');
    }

    const note: Partial<Note> = {
      title: noteData.title,
      content: noteData.content,
      date: noteData.date,
      category: noteData.category ?? undefined,
      isImportant: noteData.isImportant ?? false,
      isActive: noteData.isActive ?? true,
    };
    return this.noteRepository.save(note);
  }

  async findAllNotes(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async findNoteById(id: number): Promise<Note | null> {
    return this.noteRepository.findOneBy({ id });
  }

  async updateNote(id: number, noteData: Partial<Note>): Promise<Note> {
    const updateFields: Partial<Note> = {};
    if (noteData.title !== undefined) updateFields.title = noteData.title;
    if (noteData.content !== undefined) updateFields.content = noteData.content;
    if (noteData.date !== undefined) updateFields.date = noteData.date;
    if (noteData.category !== undefined) {
      updateFields.category = noteData.category;
    }
    if (noteData.isImportant !== undefined) {
      updateFields.isImportant = noteData.isImportant;
    }
    if (noteData.isActive !== undefined) {
      updateFields.isActive = noteData.isActive;
    }
    await this.noteRepository.update(id, updateFields);
    const updatedNote = await this.noteRepository.findOneBy({ id });
    if (!updatedNote) {
      throw new Error(`Note with id ${id} not found`);
    }
    return updatedNote;
  }

  async deleteNote(id: number): Promise<void> {
    await this.noteRepository.delete(id);
  }
}
