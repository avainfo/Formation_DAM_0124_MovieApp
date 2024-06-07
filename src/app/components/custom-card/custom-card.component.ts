import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieInfo} from "../../utils/movie-info";

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() src: string = "";
  @Input() description: string = "";
  @Output() imageClicked: EventEmitter<any> = new EventEmitter<unknown>();

  constructor() {
  }

  ngOnInit() {
    console.log("=".repeat(10))
    console.log(this.title)
    console.log(this.src)
    console.log(this.description)
    console.log("=".repeat(10))
  }

  onImageClicked() {
    const movieInfo = new MovieInfo(this.title, this.src, this.description);
    this.imageClicked.emit(movieInfo);
  }

}
