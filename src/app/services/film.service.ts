

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Film {
    id: number,
    title: string,
    director: string,
    year: number,
    description: string,
}
@Injectable({
    providedIn: 'root'
})
export class FilmService {

    public films: Film[] = [
        {
            id: 0,
            title: 'Piratas del Caribe',
            director: '9:32 AM',
            year: 2005,
            description: 'ñaslkdfjñlaksjfñlaksjfñlaskdjfñlkasdjfñlaskjfñlaskdfjñlaskdjfñlkasdjfñlaksdjfñllaksdjfñlkasdjf'
        },
        {
            id: 1,
            title: 'Harry Potter',
            director: '9:32 AM',
            year: 1995,
            description: 'ñaslkdfjñlaksjfñlaksjfñlaskdjfñlkasdjfñlaskjfñlaskdfjñlaskdjfñlkasdjfñlaksdjfñllaksdjfñlkasdjf'
        },
        {
            id: 2,
            title: 'Los juegos del Hambre',
            director: '9:32 AM',
            year: 2005,
            description: 'ñaslkdfjñlaksjfñlaksjfñlaskdjfñlkasdjfñlaskjfñlaskdfjñlaskdjfñlkasdjfñlaksdjfñllaksdjfñlkasdjf'
        },
        {
            id: 3,
            title: 'Pulp Fiction',
            director: 'Quentin Tarantino',
            year: 1985,
            description: 'ñaslkdfjñlaksjfñlaksjfñlaskdjfñlkasdjfñlaskjfñlaskdfjñlaskdjfñlkasdjfñlaksdjfñllaksdjfñlkasdjf'
        },
        {
            id: 4,
            title: 'Resacón en las Vegas',
            director: '9:32 AM',
            year: 2002,
            description: 'ñaslkdfjñlaksjfñlaksjfñlaskdjfñlkasdjfñlaskjfñlaskdfjñlaskdjfñlkasdjfñlaksdjfñllaksdjfñlkasdjf'
        },
    ];


    constructor(private http: HttpClient) {
        this.getFilms();
    }

    private getFilms() {

        // this.http.get("https://karljoke.herokuapp.com/jokes/ten", {}).subscribe((data) => {

        //     //console.log(data);
        //     var jsonString = JSON.stringify(data);

        //     this.films = JSON.parse(jsonString);

        // });

    }

    public getFilmByID(id: number): Film {
        return this.films.filter(joke => joke.id == id)[0];
    }

    public getAllFilms(): Film[] {

        return this.films;
    }



}