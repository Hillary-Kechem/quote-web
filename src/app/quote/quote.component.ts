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

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote);
  }

  //delete button 
  completeQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
