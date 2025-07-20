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

  async createNote(note: Note): Promise<Note> {
    return this.noteRepository.save(note);
  }

  async findAllNotes(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async findNoteById(id: number): Promise<Note | null> {
    return this.noteRepository.findOneBy({ id });
  }

  async updateNote(id: number, note: Partial<Note>): Promise<Note> {
    await this.noteRepository.update(id, note);
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
