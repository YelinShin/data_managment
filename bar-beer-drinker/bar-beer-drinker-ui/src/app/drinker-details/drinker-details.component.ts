import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {DrinkersService, Drinker, DrinkerTransactions, OrderedMost, DrinkerSpendings} from '../drinkers.service';
import { HttpResponse } from '@angular/common/http';
import { getBootstrapListener } from '@angular/router/src/router_module';
import { getNumberOfCurrencyDigits } from '@angular/common';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {
  drinkerName: string;
  drinkerDetails: Drinker;
  transactions: DrinkerTransactions[];
  mostOrdered: OrderedMost[];
  spendingsByDate : DrinkerSpendings[];
  spendingsByWeek: DrinkerSpendings[];
  spendingsByMonth: DrinkerSpendings[];
  
  successD : boolean; 
  successM : boolean;
  successW : boolean;

  spendingsForm_Date = new FormGroup({
    graphDate: new FormControl('', Validators.required),
    barName: new FormControl('', Validators.required),
  });
  
  spendingsForm_Week = new FormGroup({
    graphWeek: new FormControl('', Validators.required),
    barName: new FormControl('', Validators.required),
  });

  spendingsForm_Month = new FormGroup({
    graphMonth: new FormControl('', Validators.required),
    barName: new FormControl('', Validators.required ),
  });

  constructor( 
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
  ){
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
    
      drinkerService.getDrinker(this.drinkerName).subscribe(
        data => {
          this.drinkerDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
             alert('Drinker not found');         
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server.Please check the browser console.');
          }
        }
      );
     
      drinkerService.getDrinkerTransactions(this.drinkerName).subscribe(
        data => {
          this.transactions = data;
        },
        error => {
            alert('Could not retrieve transactions');
        }
      );
      
      drinkerService.getMostOrderedBeer(this.drinkerName).subscribe(
        data => {
          this.mostOrdered = data; 
          console.log(data);

          const item = [];
          const count = [];
          data.forEach(mostOrdered => {
            item.push(mostOrdered.item);
            count.push(mostOrdered.count);
          });
          this.render_Most_Ordered_Chart(item, count);
        }
      )
    });
  }
  ngOnInit() {
  } 

  render_Most_Ordered_Chart(items: string[], count: number[]){
    Highcharts.chart('bargraph_ORDERS_MOST', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'TOP 3 BEERS ORDERED'
      },
      xAxis: {
        categories: items,
        title: {
          text: 'Beer'
        }
      },
      yAxis:{
        min: 0,
        title: {
          text: 'Ordered Count'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions:{
        items:{
          dataLabels: {
            enabled:true
          }
        },
        series: {
          color: '#FFC400'
        }
      },
      legend: {
        enabled: false 
      },
      credits:{
        enabled: false
      },
      series: [{
        data: count
      }]
    })
  }
  onSubmitbyDate(){
    console.log(this.spendingsForm_Date.value);
    
      this.drinkerService.getSpendingsByDate(this.drinkerName, this.spendingsForm_Date.value.graphDate, this.spendingsForm_Date.value.barName).subscribe(
        data => {
          this.spendingsByDate = data; 
          this.successD = true;
          console.log(data);
          if(data.length == 0){
            this.successD = false;
            this.spendingsForm_Date.reset();
            return console.log("No Found Spendings for Given Date and Bar")
          }
          const bar = [];
          const spending = [];
          data.forEach(spendingsByDate => {
            spending.push(spendingsByDate.spending);
            bar.push(spendingsByDate.bar);
          });
          this.render_Drinker_Spending_Chart_Date(bar, spending);
        }
      )
      this.successD = false; 
    }

    onSubmitbyWeek(){
      console.log(this.spendingsForm_Week.value);
      
        this.drinkerService.getSpendingsByWeek(this.drinkerName, this.spendingsForm_Week.value.graphWeek, this.spendingsForm_Week.value.barName).subscribe(
          data => {
            this.spendingsByWeek = data; 
            this.successW = true;
            console.log(data);
            if(data.length == 0){
              this.successW = false;
              this.spendingsForm_Date.reset();
              return console.log("No Found Spendings for Given Week and Bar")
            }
          
            const day = [];
            const spending = [];
            data.forEach(spendingsByWeek => {
              spending.push(spendingsByWeek.spending);
              day.push(spendingsByWeek.date);
            });
            this.render_Drinker_Spending_Chart_Week(day, spending);
            this.successM = true;
          }
        )
        this.successW = false;
      }
      onSubmitbyMonth(){
        console.log(this.spendingsForm_Month.value);
        
          this.drinkerService.getSpendingsByMonth(this.drinkerName, this.spendingsForm_Month.value.graphMonth, this.spendingsForm_Month.value.barName).subscribe(
            data => {
              this.spendingsByMonth = data;
              this.successM = true;  
              console.log(data);

              if(data.length == 0){
                this.successM = false;
                this.spendingsForm_Date.reset();
                return console.log("No Found Spendings for Given Month and Bar")
              }
              const day = [];
              const spending = [];
              data.forEach(spendingsByMonth => {
                spending.push(spendingsByMonth.spending);
                day.push(spendingsByMonth.date);
              });
              this.render_Drinker_Spending_Chart_Month(day, spending);
            }
          )
          this.successM = false; 
        }

  render_Drinker_Spending_Chart_Date(bars: string[], spendings: number[]){
    Highcharts.chart('bargraph_Drinker_Spending_Date', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'SPENDINGS on ' + this.spendingsForm_Date.value.graphDate
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Bar'
        }
      },
      yAxis:{
        min: 0,
        title: {
          text: 'Total Spendings'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions:{
        items:{
          dataLabels: {
            enabled:true
          }
        },
        series: {
          color: '#FFC400'
        }
      },
      legend: {
        enabled: false 
      },
      credits:{
        enabled: false
      },
      series: [{
        data: spendings
      }]
    })
  }
  render_Drinker_Spending_Chart_Week(dates: string[], spendings: number[]){
    Highcharts.chart('bargraph_Drinker_Spending_Week', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'SPENDINGS WEEK OF ' + this.spendingsForm_Week.value.graphWeek
      },
      xAxis: {
        categories: dates,
        title: {
          text: 'Date'
        }
      },
      yAxis:{
        min: 0,
        title: {
          text: 'Total Spendings'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions:{
        items:{
          dataLabels: {
            enabled:true
          }
        },
        series: {
          color: '#FFC400'
        }
      },
      legend: {
        enabled: false 
      },
      credits:{
        enabled: false
      },
      series: [{
        data: spendings
      }]
    })
  }
  render_Drinker_Spending_Chart_Month(dates: string[], spendings: number[]){
    Highcharts.chart('bargraph_Drinker_Spending_Month', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'SPENDINGS for ' + this.spendingsForm_Month.value.graphMonth
      },
      xAxis: {
        categories: dates,
        title: {
          text: 'DATE'
        }
      },
      yAxis:{
        min: 0,
        title: {
          text: 'Total Spendings'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions:{
        items:{
          dataLabels: {
            enabled:true
          }
        },
        series: {
          color: '#FFC400'
        }
      },
      legend: {
        enabled: false 
      },
      credits:{
        enabled: false
      },
      series: [{
        data: spendings
      }]
    })
  }


}


  

