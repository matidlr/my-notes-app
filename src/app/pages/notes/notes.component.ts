import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  imports: [HeaderComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  constructor( public noteService: NoteService) {}

}
