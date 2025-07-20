import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.entity';
import { CreateNoteDto, UpdateNoteDto } from './dto/note.dto';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async createNote(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return this.noteService.createNote(createNoteDto);
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
  async updateNote(@Param('id') id: number, @Body() updateNoteDto: UpdateNoteDto): Promise<Note> {
    return this.noteService.updateNote(id, updateNoteDto);
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: number): Promise<void> {
    return this.noteService.deleteNote(id);
  }
}
