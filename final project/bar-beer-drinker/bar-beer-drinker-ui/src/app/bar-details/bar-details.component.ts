import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar, BarMenuItem, Spender, PopBeer, PopManf, BusyDay, BusyWeek, items} from '../bars.service';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator} from '@angular/forms';
import { DrinkersService, Drinker } from '../drinkers.service';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  barName: string;
  barDetails: Bar;
  menu:BarMenuItem[];
  spender: Spender[];
  popBeer: PopBeer[];
  popManf: PopManf[];
  busyday: BusyDay[];
  busyweek: BusyWeek[];
  items: items[];
  
  tid: any;
  item :string='';  
  result: items[];
  insert: boolean;
  t_insert: boolean;
  t_vaild: boolean = false;

  output: any[];
  output1: Array<string>;
  drinker_list;
  

  TransactionForm = new FormGroup({
    t_itemname: new FormControl('',Validators.required),
    t_payer: new FormControl('',Validators.required),
    t_time: new FormControl('',Validators.required),
    t_date: new FormControl('',Validators.required),
    t_days: new FormControl('',Validators.required),
    t_tip: new FormControl('',Validators.required),
  });
  t_menu;

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private drinkerService: DrinkersService,
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      barService.getBar(this.barName).subscribe(
        data => {
          this.barDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
             alert('Bar not found');         
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server.Please check the browser console.');
          }
        }
      );

      barService.getMenu(this.barName).subscribe(
        data => {
          this.menu = data;
          this.t_menu = data;
        }
      );

      barService.getBarLargestSpender(this.barName).subscribe(
        data =>{
          this.spender = data;

          console.log(data);

          const drinkers = [];
          const totalSpending = [];

          data.forEach(spender => {
            drinkers.push(spender.name);
            totalSpending.push(spender.totalSpending)
          });

          this.renderChart(drinkers,totalSpending);
        }
      );

      barService.getBeerMostPop(this.barName).subscribe(
        data =>{
          this.popBeer = data;

          console.log(data);

          const beers = [];
          const counts = [];

          data.forEach(popBeer => {
            beers.push(popBeer.item);
            counts.push(popBeer.count)
          });

          this.renderChart2(beers,counts);
        }
      );
      
      barService.getManfMostBeer(this.barName).subscribe(
        data =>{
          this.popManf = data;

          console.log(data);

          const manfs = [];
          const counts = [];

          data.forEach(popManf => {
            manfs.push(popManf.manf);
            counts.push(popManf.count)
          });

          this.renderChart3(manfs,counts);
        }
      );

      barService.getBusiestPeriodDay(this.barName).subscribe(
        data =>{
          this.busyday = data;
        }
      );

      barService.getBusiestPeriodWeek(this.barName).subscribe(
        data =>{
          this.busyweek = data;
          console.log(data);
        }
      );

      
    });
  }

  ngOnInit() {
    this.getDrinkers();
  }
  getDrinkers(){
    this.drinkerService.getDrinkers().subscribe(
      data => {
        this.drinker_list = data;
      },
      error =>{
        alert('Could not get list of drinkers');
      }
    )
  }
  
  
  onSubmit2(){
    console.log(this.TransactionForm.value);
    console.log(this.TransactionForm.value.t_itemname);

    this.barService.checkVaildTransactionInsert(this.barName, this.TransactionForm.value.t_days, this.TransactionForm.value.t_time).subscribe(
      data=>{
        this.t_vaild = true;
        if(this.t_vaild==true){
          this.barService.insertTransaction1(this.TransactionForm.value.t_time, this.TransactionForm.value.t_date,this.TransactionForm.value.t_days,this.TransactionForm.value.t_tip).subscribe(
            data=>{
              for(let i in this.TransactionForm.value.t_itemname){
                this.barService.insertTransaction2(this.TransactionForm.value.t_itemname[i]).subscribe(
                  data=>{
                    this.barService.insertTransaction3(this.TransactionForm.value.t_payer).subscribe(
                      data=>{
                        this.barService.insertTransaction4(this.barName).subscribe(
                          data=>{
                            this.tid = data[0].id;
                            console.log(data[0].id)
                            this.barService.insertTransaction5(this.tid).subscribe(
                              data=>{
                                this.getDrinkers();
                                this.TransactionForm.reset();
                                this.t_insert = true;
                              }
                            )
                            this.t_insert=false; 
                          }
                        )
                      }
                    )
                  } 
                )
              }
            }
          )

        }
      },
      error=>{
        this.t_insert = false; 

        alert("Unsatisfy pattern 1! Invalid transaction with given time. Please checking the operation time of the day.")

        this.TransactionForm.reset()
      }
    )
  
  }

  renderChart(drinkers: string[], totalSpending: number[]){
    Highcharts.chart('bargraph',{
      chart: {
        type: 'column'
      },
      title: {
        text: 'TOP 3 Largest Spenders at ' + this.barName
      },
      xAxis: {
        categories: drinkers,
        title: {
          text: 'Drinker'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Spending'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        drinkers:{
          dataLabels: {
            enabled: true
          }
        },
        series: {
            color: '#FFC400'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: totalSpending
      }]
    });
  }

  renderChart2(beers: string[], counts: number[]){
    Highcharts.chart('bargraph2',{
      chart: {
        type: 'column'
      },
      title: {
        text: 'Most Popular Beers at ' + this.barName
      },
      subtitle: {
        text: 'Dealing with tied frequent'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Beers'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Frequents'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        beers:{
          dataLabels: {
            enabled: true
          }
        },
        series: {
            color: '#FFC400'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }

  renderChart3(manfs: string[], counts: number[]){
    Highcharts.chart('bargraph3',{
      chart: {
        type: 'column'
      },
      title: {
        text: 'TOP Manufacturers (Sell Most Beers in ' + this.barName + ')'
      },
      subtitle: {
        text: 'Dealing with tied frequent'
      },
      xAxis: {
        categories: manfs,
        title: {
          text: 'Manufacturer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Frequents'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        manfs:{
          dataLabels: {
            enabled: true
          }
        },
        series: {
            color: '#FFC400'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }

}
