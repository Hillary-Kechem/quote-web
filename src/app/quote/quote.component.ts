import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quote[]=[
    new Quote(1, 'Chris Pine','Programming isnt about what you know; its about what you can figure out.','Kip', new Date(2020.2,20)),
    new Quote(2, 'Dennis Ritchie','The only way to learn a new programming language is by writing programs in it.','Hilary',new Date(2022,2.22)),
    new Quote(3, 'Joyce Wheeler','Sometimes its better to leave something alone, to pause, and thats very true of programming.','kechem',new Date(2019,2,18)),
  ];
  toggleDetails(index:any){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }
quoteComplete(isComplete:any, index:any){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}
addNewQuote(newQuote:Quote){
  this.quotes.push(newQuote);
 }
  constructor() { } 
  ngOnInit(): void {
  }
}