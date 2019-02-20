import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';


export interface Bar {
  name: string;
  license: string;
  state: string;
  phone: string;
  address: string;
 } 

 export interface BarMenuItem {
  item: string;
  manf: string;
  price: number;
 } 
 
 export interface Spender{
   bar: string;
   name: string;
   totalSpending: number;
 }
 
 export interface PopBeer{
  bar_name: string;
  beer: string;
  count: number;
 }

 export interface PopManf{
   manf: string;
   count: number;
 }

 export interface BusyDay{
   hr: string;
   count: number;
   day: string;
   bar: string;
 }
 
 export interface BusyWeek{
   count: number;
   day: string;
   bar: string;
 }

  export interface item{
    name: string;
  }

  export interface items{
    bar: string;
    item: string;
    price: number;
  }


@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { }

  getBars() {
    return this.http.get<Bar[]>('/api/bar');
 }
  
  getBar(bar: string) {
     return this.http.get<Bar>('/api/bar/' + bar);
  }

  getMenu(bar: string){
      return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }

  getBarLargestSpender(bar: string){
    return this.http.get<any[]>('/api/bar_largestSpender/'+ bar);
  }

  getBeerMostPop(bar: string){
    return this.http.get<any[]>('/api/bar_popBeer/'+ bar);
  }

  getManfMostBeer(bar: string){
    return this.http.get<any[]>('/api/bar_popManf/'+ bar);
  }

  getBusiestPeriodDay(bar: string){
    return this.http.get<BusyDay[]>('/api/busy_period_day/'+ bar);
  }
  
  getBusiestPeriodWeek(bar: string){
    return this.http.get<BusyWeek[]>('/api/busy_period_week/'+ bar);
  }

  getFindBeer(beer: string){
    return this.http.get<items[]>('/api/beerfind/'+ beer);
  }

  insertItem(item: string, manf: string, type: string){
    return this.http.get<any[]>('/api/bar/insert_item/' + item + '/' + manf + '/' + type);
  }
  
insertTransaction1(time: string, date: string, day: string, tip: number){
  return this.http.get<any[]>('/api/bar/insert_trans1/' + time + '/' + date +'/' + day +'/'+tip);
}

insertTransaction2(item: any){
  return this.http.get<any[]>('/api/bar/insert_trans2/' + item);
}

insertTransaction3(drinker: string){
  return this.http.get<any[]>('/api/bar/insert_trans3/' + drinker);
}

insertTransaction4(bar: string){
  return this.http.get<any[]>('/api/bar/insert_trans4/' + bar);
}

checkVaildTransactionInsert(bar: string, day: string, time: string){
  return this.http.get<any[]>('/api/bar/check_vaild_transaction_insert/' + bar +'/'+ day+'/'+time);
}

insertTransaction5(tid: number){
  return this.http.get<any[]>('/api/bar/insert_trans5/' + tid);
}

insertDrinker(name: string, address: string, state: string, phone: string){
  return this.http.get<any[]>('/api/insert_drinker/' + name + '/' + address + '/'+ state +'/'+phone);
}

  insertBar(name: string, license: number, state: string, phone:string, address: string){
    return this.http.get<any[]>('/api/insert_bar/' + name + '/' + license + '/'+ state +'/'+phone+'/'+address);
  }

  insertDays(name: string, open: string, close: string, day: string){
    return this.http.get<any[]>('/api/insert_day/' + name + '/' + open + '/'+ close +'/'+day);
  }

  insertFrequent(name: string, bar: string){
    return this.http.get<any[]>('/api/insert_frequent/' + name + '/' + bar);
  }

  insertOccurs(tid: number, bar: string){
    return this.http.get<any[]>('/api/insert_occurs/' + tid + '/' + bar);
  }

}