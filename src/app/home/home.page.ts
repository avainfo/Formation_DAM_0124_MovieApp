import { Component } from '@angular/core';
import {MovieInfo} from "../utils/movie-info";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {

  constructor() {}

  changeBackground(movieIno: MovieInfo) {
    console.log(movieIno.title)
    console.log(movieIno.description)
    console.log(movieIno.url);
    document.getElementsByTagName("ion-content")[0].setAttribute("style", "background: url(" + movieIno.url + ") no-repeat center;background-size: cover;");
    document.getElementsByTagName("h1")[0].innerHTML = movieIno.title;
    document.getElementsByClassName("description")[0].innerHTML = movieIno.description;
  }
}
