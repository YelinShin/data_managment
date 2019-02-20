import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BeersService, Beer, biggestConsumer, SellingMostBar,TimeDist} from '../beers.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;
  consumer: biggestConsumer[];
  bar: SellingMostBar[];
  time: TimeDist[];

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');

      beerService.getBiggestConsumer(this.beerName).subscribe(
        data=>{
          this.consumer = data;
        },

        (error: HttpResponse<any>) => {
          if (error.status === 404) {
             alert('Consumer not found');         
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server.Please check the browser console.');
          }
        }
      );

      beerService.getBarSellMost(this.beerName).subscribe(
        data=>{
          this.bar = data;
        }
      );

      beerService.getTimeDisBeer(this.beerName).subscribe(
        data=>{
          this.time = data;
        }
      );

      beerService.getBeer(this.beerName).subscribe(
        data => {
          this.beerDetails = data;
        }
      );

    });
  }

  ngOnInit() {
  }

}
