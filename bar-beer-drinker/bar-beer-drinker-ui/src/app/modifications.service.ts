import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Item{
  name: string;
  manf: string;
  type: string;
}
export interface Transaction{
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ModificationsService {

  constructor(
    public http: HttpClient
  ) { }


  updateDrinker(name: string, column: string, value: string){
    return this.http.get<any[]>('/api/modifications/update_drinker/'+ name + '/' + column+ '/' + value);
  }
  insertDrinker(name: string, address: string, state: string, phone: string){
    return this.http.get<any[]>('/api/modifications/insert_drinker/' + name + '/' + address + '/'+ state +'/'+phone);
  }
  updateBar(name: string, column: string, value: string){
    return this.http.get<any[]>('/api/modifications/update_bar/'+ name + '/' + column+ '/' + value);
  }
  runAnyQuery(query: any){
    return this.http.get<any[]>('/api/any_query/' + query);
  }
  insertBar(name: string, license: number, state: string, phone:string, address: string){
    return this.http.get<any[]>('/api/insert_bar/' + name + '/' + license + '/'+ state +'/'+phone+'/'+address);
  }
  updateFrequent(name: string, oldbar: string, newbar:string){
    return this.http.get<any[]>('/api/update_frequent/' + name+'/' + oldbar+ '/' +newbar);
  }

  insertFrequent(name: string, bar: string){
    return this.http.get<any[]>('/api/insert_frequent/' + name + '/' + bar);
  }
  insertLikes(name: string, beer: string){
    return this.http.get<any[]>('/api/insert_likes/' + name + '/' + beer);
  }
  insertOccurs(tid: number, bar: string){
    return this.http.get<any[]>('/api/insert_occurs/' + tid + '/' + bar);
  }
  getItems(){
    return this.http.get<Item[]>('/api/item');
  }
  updateItem(name: string, column: string, value: string){
    return this.http.get<any[]>('/api/modifications/update_item/'+ name + '/' + column+ '/' + value);
  }
  updateLike(name: string, oldval: string, newval:string){
    return this.http.get<any[]>('/api/modifications/update_like/'+ name +'/' +oldval+'/' + newval);
  }
  insertItem(item: string, manf: string, type: string){
    return this.http.get<any[]>('/api/bar/insert_item/' + item + '/' + manf + '/' + type);
  }
  deleteDrinker(name: string){
    return this.http.get<any[]>('/api/delete_drinker/' + name);
  }
  deleteBar(name: string){
    return this.http.get<any[]>('/api/delete_bar/' + name);
  }
  
  deleteFrequent(bar: string, name: string){
    return this.http.get<any[]>('/api/delete_frequent/' + bar +'/'+ name);
  }
  insertSells(bar: string, item: string, price: number){
    return this.http.get<any[]>('/api/insert_sells/' + bar + '/' + item +'/'+price);
  }

  verifyPattern3_1(bar: string, beer: string){
    return this.http.get<any[]>('/api/verify_pattern3_1/' + bar + '/' + beer);
  }

  verifyPattern3_2(bar: string, beer: string, price: number){
    return this.http.get<any[]>('/api/verify_pattern3_2/' + bar + '/' + beer + '/' + price);
  }

  verifyPattern3_0(item: string){
    return this.http.get<any[]>('/api/verify_pattern3_0/' + item);
  }
  insertHas(tid: number, item: string){
    return this.http.get<any[]>('/api/insert_has/' + tid + '/' + item);
  }
  deleteItem(name: string){
    return this.http.get<any[]>('/api/delete_item/' + name);
  }
  deleteSell(bar: string, item: string){
    return this.http.get<any[]>('/api/delete_sells/' + bar + '/' + item);
  }
  deleteLike(name: string, beer: string){
    return this.http.get<any[]>('/api/delete_like/' + name + '/' + beer);
  }
  deleteOccur(tid: number, bar:string){
    return this.http.get<any[]>('/api/delete_occur/' + tid + '/' + bar);
  }
  deleteHas_valid(tid: number, item: string){
    return this.http.get<any[]>('/api/delete_has_valid/' + tid +'/'+ item);
  }

  deleteHas_lastItem(tid:number){
    return this.http.get<any[]>('/api/delete_has_lastItem/' + tid);
  }
  deleteHas(tid: number, item: string){
    return this.http.get<any[]>('/api/delete_has/' + tid +'/'+ item);
  }
  deleteDay(bar: string, day: string){
    return this.http.get<any[]>('/api/delete_day/' + bar +'/'+day);
  }
  deletePay(tid: number, name:string){
    return this.http.get<any[]>('/api/delete_pays/' + tid + '/' + name);
  }
  updatePay(tid: number,oldpayer: string, newpayer:string){
    return this.http.get<any[]>('/api/update_pays/'+tid +'/' + oldpayer + '/' + newpayer);
  }
  updateHas(tid: number, olditem: string, newitem: string){
    return this.http.get<any[]>('/api/update_has/'+tid +'/' + olditem + '/' + newitem);
  }
  insertPay(tid: number, name: string){
    return this.http.get<any[]>('/api/insert_pay/' + tid +'/'+name);
  }
  insertDays(name: string, open: string, close: string, day: string){
    return this.http.get<any[]>('/api/insert_day/' + name + '/' + open + '/'+ close +'/'+day);
  }
  deleteTrans(tid: number){
    return this.http.get<any[]>('/api/delete_trans/' + tid );
  }
  update_days_bar(bar:string, day: string, newVal : string){
    return this.http.get<any[]>('/api/update_day_bar/' + bar+ '/'+ day+ '/'+ newVal);
  }
  update_days_pattern1validation_open(bar:string, day:string, openTime: string){
    return this.http.get<any[]>('/api/update_day_openingTime/'+ bar+ '/'+day+'/'+openTime);
  }
  update_days_pattern1validation_close(bar:string, day:string, closeTime: string){
    return this.http.get<any[]>('/api/update_day_closingTime/'+bar+'/'+ day+'/' + closeTime);
  }
  update_days_daycolumn(bar:string, day:string, newVal:string){
    return this.http.get<any[]>('/api/update_days_daycolumn/'+bar+'/'+ day+ '/'+ newVal);
  }


 
}
