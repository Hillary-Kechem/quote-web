export class  Quote{
  
    showQuote: boolean;
    constructor(public id: number,
        public authorName: string,
        public description: string,
        public artist:string,
        public publishDate: Date){
      this.showQuote=false;
    }
  }