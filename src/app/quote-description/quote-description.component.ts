import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  @Input() quote:Quote | undefined;
  
  @Output() isComplete = new EventEmitter<boolean>();
  
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
    numberOfLikes: number= 0;
    likeButtonClick(){
     this.numberOfLikes ++;
  
    }
    numberOfDislikes: number= 0;
    dislikeButtonClick(){
     this.numberOfDislikes--;
    }
    
    
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  
  }
