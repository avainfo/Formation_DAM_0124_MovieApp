import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() src: string = "";

  constructor() {
  }

  ngOnInit() {
    console.log(this.title)
    console.log(this.src)
  }

}
