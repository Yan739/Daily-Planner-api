import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.entity';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async createNote(@Body() note: Note): Promise<Note> {
    return this.noteService.createNote(note);
  }

  @Get()
  async findAllNotes(): Promise<Note[]> {
    return this.noteService.findAllNotes();
  }

  @Get(':id')
  async findNoteById(@Param('id') id: number): Promise<Note | null> {
    return this.noteService.findNoteById(id);
  }

  @Put(':id')
  async updateNote(
    @Param('id') id: number,
    @Body() note: Partial<Note>,
  ): Promise<Note> {
    return this.noteService.updateNote(id, note);
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: number): Promise<void> {
    return this.noteService.deleteNote(id);
  }
}
