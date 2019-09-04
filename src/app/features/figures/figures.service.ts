import { Injectable, OnInit } from "@angular/core";
import { Movie, Links } from "./types";

@Injectable({
  providedIn: "root"
})
export class FiguresService {
  private movies: Movie[] = [
    { id: 1, title: "Halloweentown", frequency: true },
    { id: 2, title: "Harry Potter and the Sorcerer's Stone", frequency: true },
    { id: 3, title: "Blair Witch Project", frequency: true },
    { id: 4, title: "Snow White and the Seven Dwarfs", frequency: true },
    { id: 5, title: "The Craft", frequency: true },
    { id: 6, title: "Witches of Eastwick", frequency: true }
  ];

  constructor() {}

  getLinks(): Links {
    return {
      frequency: this.movies.filter(el => el.frequency)
    };
  }

  getMetadata(id: string): Movie {
    return this.movies.find(el => el.id === parseInt(id));
  }
}
