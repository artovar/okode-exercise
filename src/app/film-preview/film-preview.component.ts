import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../services/film.service';

@Component({
  selector: 'app-film-preview',
  templateUrl: './film-preview.component.html',
  styleUrls: ['./film-preview.component.scss'],
})
export class FilmPreviewComponent implements OnInit {
  @Input() film: Film

  constructor() { }

  ngOnInit() { }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

}
