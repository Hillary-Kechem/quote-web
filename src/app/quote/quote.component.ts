import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("Kechem The great","Gravity is te greatest force", 'Aubrey'),
    new Quote("Hillary","Moringa is the best place to be","Ms Chloe")
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
