

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Film {
    imdbID: string,
    Title: string,
    Director: string,
    Year: number,
    Plot: string,
    Poster?: string,
}
@Injectable({
    providedIn: 'root'
})
export class FilmService {

    public films: Film[] = [];


    constructor(private http: HttpClient) {
        this.searchFilms("");
    }

    public async getFilmByID(id: string): Promise<Film> {
        var film: Film;
        var data = await this.http.get("http://www.omdbapi.com/?apikey=f769527&i=" + id, {}).toPromise();

       
        var jsonString = JSON.stringify(data);

        film = JSON.parse(jsonString);


        return film;
    }

    public async searchFilms(searchValue: string): Promise<Film[]> {

        var data = await this.http.get("http://www.omdbapi.com/?apikey=f769527&s=" + searchValue, {}).toPromise();

        try {
            var jsonString = JSON.stringify(data['Search']);

            this.films = JSON.parse(jsonString);
        } catch (e) {
            this.films = [];
        }
        return this.films;
    }

}