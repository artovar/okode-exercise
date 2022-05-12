import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {
  public film: Film;

  constructor(
    private films: FilmService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.films.getFilmByID(id).then((data) => { this.film = data; });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Peliculas' : 'Películas';
  }
}
