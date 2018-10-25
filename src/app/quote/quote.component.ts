import { Component, OnInit } from '@angular/core';
// import { Quote } from '../quote';
import { Quotes } from '../quotes';
import { AlertsService } from '../alert-service/alerts.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';

import { QuoteService } from '../quotes/quote.service';
import {QuoteRequestService} from '../quote-http/quote-request.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  providers: [QuoteService],
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = Quotes;
  alertService: AlertsService;
  quote: Quote;

  // quotes = [
  //   new Quote(1, 'The mind is everything', 'The best way out is always rough', new Date(2018, 3, 14)),
  //   new Quote(2, 'The trick in life is learning how to deal with it', 'Our life is frittered away by detail', new Date(2018, 6, 9)),
  //   new Quote(3, 'Be happy for this moment.This moment is your life.', 'Love the life you live', new Date(2018, 1, 12)),
  //   new Quote(4, 'Life is too important to be taken seriously', 'Keep calm and carry on.', new Date(2018, 0, 18)),
  //   new Quote(5, 'Get busy living or get busy dying.', 'Life is short,death is forever', new Date(2018, 2, 14)),
  //   new Quote(6, 'It’s better to be a lion for a day than a sheep all your life', 'Life is short but wide', new Date(2018, 3, 14)),

  // ];
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);

  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
        this.alertService.alertMe('Goal has been deleted');
      }
    }
  }


  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor(quoteService: QuoteService, alertService: AlertsService, private http: HttpClient, ) {
    this.quotes = quoteService.getQuotes();
    this.alertService = alertService;
  }

  ngOnInit() {
    // this.quoteService.quoteRequest();
    // this.quote = this.quoteService.quote;

    interface ApiResponse {
      quote: string;
      author: string;
    }
    this.http.get<ApiResponse>('https://talaikis.com/api/quotes/random/').subscribe(data => {
      this.quote = new Quote(data.quote, data.author, );
    });
  }
}


