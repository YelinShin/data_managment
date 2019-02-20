import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Beer {
  name: string;
  manf: string;
}

export interface biggestConsumer {
  name: string;
  count: number;
}

export interface SellingMostBar{
  bar: String;
  count: number;
}

export interface TimeDist{
  hour: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})

export class BeersService {

  constructor(private http: HttpClient) 
  { }

  getBeer(bar: string) {
    return this.http.get<Beer>('api/beerfind/' + bar);
  }
  
  getBeers(){
    return this.http.get<Beer[]>('api/beer');
  }

  getBiggestConsumer(beer: string){
    return this.http.get<biggestConsumer[]>('api/consumer/' + beer);
  }

  getBarSellMost(beer: string){
    return this.http.get<SellingMostBar[]>('api/bar_most/' + beer);
  }

  getTimeDisBeer(beer:string){
    return this.http.get<TimeDist[]>('api/beer_timedist/' + beer);
  }

}
