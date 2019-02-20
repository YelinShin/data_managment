import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker {
  name: string; 
  address: string;
  state: string;
  phone: string;
}
export interface DrinkerName{
  name:string;
}
export interface DrinkerTransactions{
  tid: string;
  date: string;
  time: string;
  tip: number;
  totalSum: number; 
}
export interface OrderedMost{
  item: string;
  count: number;
}
export interface DrinkerSpendings{
  bar: string;
  spending: number;
  date: string;

}
@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(
    public http: HttpClient
  ) { }

  getDrinkers(){
    return this.http.get<Drinker[]>('/api/drinker');
  }
  getDrinkersFromLikes(){
    return this.http.get<DrinkerName[]>('/api/drinker/likes');
  }
  getDrinkersFromFreqs(){
    return this.http.get<DrinkerName[]>('/api/drinker/frequents');
  }
  getDrinker(drinker: string){
    return this.http.get<Drinker>('/api/drinker/' + drinker);
  }
  getDrinkerTransactions(drinker: string){
    return this.http.get<DrinkerTransactions[]>('/api/transactions/' + drinker);
  }
  getMostOrderedBeer(drinker: string){
    return this.http.get<OrderedMost[]>('/api/most_ordered_beer/' + drinker);
  }
  getSpendingsByDate(drinker:string, date:number, bar:string){
    return this.http.get<DrinkerSpendings[]>('/api/drinker_spendings_date/'+ drinker + '/' + bar + '/' + date);
  }
  getSpendingsByWeek(drinker:string, week: number, bar:string){
    return this.http.get<DrinkerSpendings[]>('/api/drinker_spendings_week/' + drinker+'/' + bar+'/' + week);
  }
  getSpendingsByMonth(drinker:string, month: number, bar:string){
    return this.http.get<DrinkerSpendings[]>('/api/drinker_spendings_month/'+ drinker+'/' + bar+'/' + month );
  }
}
