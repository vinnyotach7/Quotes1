import { Injectable } from '@angular/core';
import {Quotes} from '../quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  getQuotes() {
    return Quotes;
  }

  constructor() { }
}
