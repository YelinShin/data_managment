import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DrinkersService, Drinker } from '../drinkers.service';
import{BeersService} from '../beers.service';
import {SelectItem} from 'primeng/api'
import {ActivatedRoute, RouterLink, Router} from '@angular/router';
import {ModificationsService} from '../modifications.service';
import {BarsService, items} from '../bars.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-modifications',
  templateUrl: './modifications.component.html',
  styleUrls: ['./modifications.component.css']
})
export class ModificationsComponent implements OnInit {

  list_states: SelectItem[];
  selectedState: string;
  redirectBarForm = new FormGroup({
    redirecttoBarPage: new FormControl('',Validators.required),
  });

  drinkerUpdateForm = new FormGroup({
     drinkerName: new FormControl('',Validators.required),
     drinkerColumn: new FormControl ('', Validators.required),
     drinkerupdateValue: new FormControl('', Validators.required), 
  });
  drinkerName_UPDATE;
  drinkerLikes_list ;
  drinkerFreqs_list;
  drinkerUpdateStatus: boolean; 
  beerName_UPDATE;

  barUpdateForm = new FormGroup({
    barName: new FormControl('',Validators.required),
    barColumn: new FormControl ('', Validators.required),
    barupdateValue: new FormControl('', Validators.required), 
  });
  barName_UPDATE;
  barUpdateStatus: boolean; 

  output: any[];
  output1: Array<string>;

  insertFreqForm = new FormGroup({
    freqName: new FormControl('',Validators.required),
    freqBar: new FormControl('',Validators.required)
  });
  freq_insert: boolean;
  pattern2_bool: boolean;
  updateFreqsForm = new FormGroup({
    freqDrinker: new FormControl('',Validators.required),
    freqOldBar: new FormControl ('', Validators.required),
    freqNewBar: new FormControl('', Validators.required), 
 });

freqs_updateStatus: boolean;

  insertLikeForm = new FormGroup({
    likeName: new FormControl('',Validators.required),
    likeBeer: new FormControl('',Validators.required)
  });
  like_insert: boolean;

  insertOccurForm = new FormGroup({
    occurTid: new FormControl('',Validators.required),
    occurBar: new FormControl('',Validators.required)
  });
  occur_insert: boolean;

  anyqueryFrom = new FormGroup(
    {
      anyquery: new FormControl('',Validators.required)
    }
  );
  
  insertDrinkerForm = new FormGroup({
    drinkerName: new FormControl('',Validators.required),
    drinkerAddress: new FormControl('',Validators.required),
    drinkerState: new FormControl('',Validators.required),
    drinkerPhone: new FormControl('',Validators.required),
  });
  drinker_insert: boolean;
  
  insertBarForm = new FormGroup({
    barName: new FormControl('',Validators.required),
    barLicense: new FormControl('',Validators.required),
    barState: new FormControl('',Validators.required),
    barPhone: new FormControl('',Validators.required),
    barAddress: new FormControl('',Validators.required),
  });
  bar_insert: boolean;

  updateItemForm = new FormGroup({
    itemName: new FormControl('', Validators.required),
    itemColumn: new FormControl('', Validators.required),
    itemUpdateValue: new FormControl('', Validators.required),
  });
  item_updateStatus: boolean;
  itemName_list;
 
  updateLikeForm = new FormGroup({
    likeDrinker : new FormControl('', Validators.required),
    likeOldVal: new FormControl('', Validators.required ),
    likeNewVal: new FormControl('', Validators.required),
  });
  like_updateStatus: boolean;

  insertItemStatus: boolean;

  insertItemForm = new FormGroup({
    itemName: new FormControl('',Validators.required),
    itemManf: new FormControl('',Validators.required),
    itemType: new FormControl('',Validators.required),
  });

  deleteDrinkerForm = new FormGroup({
    D_drinkerName: new FormControl('',Validators.required),
  });
  drinker_delete: boolean;

  deleteBarForm = new FormGroup({
    deleteBar: new FormControl('',Validators.required),
  });
  bar_delete: boolean;

  deleteFreqForm=new FormGroup({
    D_freqBar: new FormControl('',Validators.required),
    D_freqName: new FormControl('',Validators.required),
  });
  freq_delete: boolean;

  insertSellsform = new FormGroup({
    sellBar: new FormControl('',Validators.required),
    sellItem: new FormControl('',Validators.required),
    sellPrice: new FormControl('',Validators.required)
  });
  sell_insert: boolean;
  pattern3_q1rownum: number;
  pattern3_q2rownum: number;
  pattern3_bool :boolean;
  pattern3_is_beer: boolean;
  
  insertHasform = new FormGroup({
    hasTID: new FormControl('',Validators.required),
    hasItem: new FormControl('',Validators.required),
  });
  has_insert: boolean;

  updateHasform = new FormGroup({
    hasTID: new FormControl('',Validators.required),
    hasOldItem: new FormControl('',Validators.required),
    hasNewItem: new FormControl('',Validators.required),
  });

  has_update: boolean;
  
  deleteItemForm=new FormGroup({
    D_itemname: new FormControl('',Validators.required),
  });
  item_delete: boolean;

  deleteSellForm=new FormGroup({
    D_sellBar: new FormControl('',Validators.required),
    D_sellItem: new FormControl('',Validators.required),
  });
  sell_delete: boolean;

  deleteLikeForm=new FormGroup({
    D_likename: new FormControl('',Validators.required),
    D_likeBeer: new FormControl('',Validators.required),
  });
  like_delete: boolean;

  deleteOccurForm=new FormGroup({
    D_occurTID: new FormControl('',Validators.required),
    D_occurBar: new FormControl('',Validators.required),
  });
  occur_delete: boolean;

  deleteHasForm=new FormGroup({
    D_hasTid: new FormControl('',Validators.required),
    D_hasItem: new FormControl('',Validators.required),
  });
  has_delete: boolean;

  deleteDayForm = new FormGroup({
    D_daybar: new FormControl('',Validators.required),
    D_dayDay: new FormControl('',Validators.required),
  });
  day_delete: boolean;

  deletePayForm=new FormGroup({
    D_payTID: new FormControl('',Validators.required),
    D_payPayer: new FormControl('',Validators.required),
  });
  pay_delete: boolean;

  insertPayForm = new FormGroup({
    Pay_tid: new FormControl('',Validators.required),
    Pay_name: new FormControl('',Validators.required),
  });
  pay_insert: boolean; 

  insertDaysForm = new FormGroup({
    daysName: new FormControl('',Validators.required),
    dayOpen: new FormControl('',Validators.required),
    dayClose: new FormControl('',Validators.required),
    dayDay: new FormControl('',Validators.required),
  });
  day_insert: boolean;

  updateDaysForm = new FormGroup({
    daysBarName: new FormControl('',Validators.required),
    daysDay: new FormControl('', Validators.required),
    daysType: new FormControl('',Validators.required),
    daysNewValue: new FormControl('',Validators.required),
  });
  day_update: boolean;



  deleteTransForm=new FormGroup({
    D_transID: new FormControl('',Validators.required),
  });
  trans_delete: boolean;
  tid: any;
  item :string='';  
  result: items[];
  t_insert: boolean;
  t_vaild: boolean = false;


  updateOccursForm = new FormGroup({
    occurTID: new FormControl('',Validators.required),
    occurOldBar: new FormControl ('', Validators.required),
    occurNewBar: new FormControl('', Validators.required), 
 });

  occurs_updateStatus: boolean;

  updatePaysForm = new FormGroup({
    payTID: new FormControl('',Validators.required),
    payOldDrinker: new FormControl ('', Validators.required),
    payNewDrinker: new FormControl('', Validators.required), 
 });

  pays_updateStatus: boolean;


  constructor(
    private drinkerService: DrinkersService,
    private barService: BarsService,
    private modificationService: ModificationsService,
    private router: Router,
    private beerService: BeersService,
  ) {
    this.list_states = [
      {label: 'Select a State', value: null},
      {label: 'Alabama', value: 'AL'},
      {label: 'Alaska', value: 'AK'},
      {label: 'Arizona', value: 'AZ'},
      {label: 'Arkansas', value: 'AR'},
      {label: 'California', value: 'CA'},
      {label: 'Colorado', value: 'CO'},
      {label: 'Connecticut', value: 'CT'},
      {label: 'Delaware', value: 'DE'},
      {label: 'Florida', value: 'FL'},
      {label: 'Georgia', value: 'GA'},
      {label: 'Hawaii', value: 'HI'},
      {label: 'Idaho', value: 'ID'},
      {label: 'Illinois', value: 'IL'},
      {label: 'Indiana', value: 'IN'},
      {label: 'Iowa', value: 'IA'},
      {label: 'Kansas', value: 'KS'},
      {label: 'Kentucky', value: 'KY'},
      {label: 'Louisiana', value: 'LA' },
      {label: 'Maine', value: 'ME' },
      {label: 'Maryland', value: 'MD' },
      {label: 'Massachusetts', value: 'MA' },
      {label: 'Michigan', value: 'MI' },
      {label: 'Minnesota', value: 'MN' },
      {label: 'Mississippi', value: 'MS' },
      {label: 'Missouri', value: 'MO' },
      {label: 'Montana', value: 'MT' },
      {label: 'Nebraska', value: 'NE' },
      {label: 'Nevada', value: 'NV' },
      {label: 'New Hampshire', value: 'NH' },
      {label: 'New Jersey', value: 'NJ' },
      {label: 'New Mexico', value: 'NM'},
      {label: 'New York', value: 'NY'},
      {label: 'North Carolina', value: 'NC'},
      {label: 'North Dakota', value: 'ND'},
      {label: 'Ohio', value: 'OH'},
      {label: 'Oklahoma', value: 'OK'},
      {label: 'Oregon', value: 'OR'},
      {label: 'Pennsylvania', value: 'PA'},
      {label: 'Rhode Island', value: 'RI'},
      {label: 'South Carolina', value: 'SC'},
      {label: 'South Dakota', value: 'SD'},
      {label: 'Tennessee', value: 'TN'},
      {label: 'Texas', value: 'TX'},
      {label: 'Utah', value: 'UT'},
      {label: 'Vermont', value: 'VT'},
      {label: 'Virginia', value: 'VA'},
      {label: 'Washington', value: 'WA'},
      {label: 'West Virginia', value: 'WV'},
      {label: 'Wisconsin', value: 'WI'},
      {label: 'Wyoming', value: 'WY'},
    ];
  }

  ngOnInit() {
    this.getDrinkers();
    this.getBars();
    this.getBeers();
    this.getItems();
    this.getDrinkers_Likes();
    this.getDrinkers_Freqs();
  }
  getDrinkers(){
    this.drinkerService.getDrinkers().subscribe(
      data => {
        this.drinkerName_UPDATE = data;
      },
      error =>{
        alert('Could not get list of drinkers');
      }
    )
  }
  getDrinkers_Likes(){
    this.drinkerService.getDrinkersFromLikes().subscribe(
      data =>{
        this.drinkerLikes_list = data;
      },
      error =>{
        alert('Could not get list of drinkers from likes table');
      }
    )
  }
  getDrinkers_Freqs(){
    this.drinkerService.getDrinkersFromFreqs().subscribe(
      data =>{
        this.drinkerFreqs_list = data;
      },
      error =>{
        alert('Could not load distinct drinkers from frequents table');
      }
    )
  }
  getBeers(){
    this.beerService.getBeers().subscribe(
      data => {
        this.beerName_UPDATE = data;
      },
      error =>{
        alert('Could not get list of beers');
      }
    )
  }
  getBars(){
    this.barService.getBars().subscribe(
      data => {
        this.barName_UPDATE = data;
      },
      error=>{
        alert('Could not get list of bars');
      }
    )
  }
  getItems(){
    this.modificationService.getItems().subscribe(
      data =>{
        this.itemName_list = data;
      },
      error =>{
        alert('Could not get list of items');
      }
    )
  }

  onSubmitDrinkerUpdate(){
    console.log(this.drinkerUpdateForm.value);
    this.modificationService.updateDrinker(this.drinkerUpdateForm.value.drinkerName, this.drinkerUpdateForm.value.drinkerColumn, this.drinkerUpdateForm.value.drinkerupdateValue).subscribe(
      data => {
        console.log(data)
        this.getDrinkers();
        this.getDrinkers_Freqs();
        this.getDrinkers_Likes();
        this.drinkerUpdateForm.reset()
        this.drinkerUpdateStatus = true;

      },
      error=>{
        alert(error.error.text)
        this.drinkerUpdateForm.reset();
        this.drinkerUpdateStatus = false;
      }
    )
    this.drinkerUpdateForm.reset();
  }
  onSubmitBarUpdate(){
    console.log(this.barUpdateForm.value);
    this.modificationService.updateBar(this.barUpdateForm.value.barName, this.barUpdateForm.value.barColumn, this.barUpdateForm.value.barupdateValue).subscribe(
      data => {
        console.log(data)
        this.getBars();
        this.barUpdateForm.reset();
        this.barUpdateStatus = true;

      },
      error=>{
        alert(error.error.text)
        this.barUpdateForm.reset();
        this.barUpdateStatus = false;

      }
    )
    this.barUpdateForm.reset();
  }


  onSubmit4(){
    console.log(this.insertDrinkerForm.value);
      this.modificationService.insertDrinker(this.insertDrinkerForm.value.drinkerName,this.insertDrinkerForm.value.drinkerAddress,this.insertDrinkerForm.value.drinkerState,this.insertDrinkerForm.value.drinkerPhone).subscribe(
        data=>{
          this.getDrinkers();
          this.getDrinkers_Freqs();
          this.getDrinkers_Likes();
          this.insertDrinkerForm.reset()
          this.drinker_insert = true;

        },
        error=>{
          alert(error.error.text)
          this.insertDrinkerForm.reset()
          this.drinker_insert = false;

        }
      )
      this.insertDrinkerForm.reset()
      this.drinker_insert = false;

  }
  onSubmit5(){
    console.log(this.insertBarForm.value);
    
      this.modificationService.insertBar(this.insertBarForm.value.barName,this.insertBarForm.value.barLicense,this.insertBarForm.value.barState,this.insertBarForm.value.barPhone,this.insertBarForm.value.barAddress,).subscribe(
        data=>{
          this.getBars();
          this.insertBarForm.reset()
          this.bar_insert = true;

        },
        error =>{
          alert("Duplicate Bar name! Bar already exists")
          this.insertBarForm.reset()
          this.bar_insert = false;

        }
      )
      this.insertBarForm.reset()
  }

  onSubmit7(){
    console.log(this.insertFreqForm.value);
    
      this.modificationService.insertFrequent(this.insertFreqForm.value.freqName, this.insertFreqForm.value.freqBar).subscribe(
        data=>{
          this.getDrinkers_Freqs();
          this.insertFreqForm.reset()
          this.freq_insert = true;
          this.pattern2_bool = true;
        },
        error=>{
          alert(error.error.text)
          if(error.error.text==="Unsatisfy pattern2! Invalid frequent state."){
            this.insertFreqForm.reset()
            this.pattern2_bool = false;
            this.freq_insert = false;
          }else{
            this.insertFreqForm.reset()
            this.pattern2_bool = null;
            this.freq_insert = false;

          }
          
        }
      )
      this.insertFreqForm.reset()
  }
  onSubmit8(){
    console.log(this.insertOccurForm.value);
    
      this.modificationService.insertOccurs(this.insertOccurForm.value.occurTid, this.insertOccurForm.value.occurBar).subscribe(
        data=>{
          this.insertOccurForm.reset()
          this.occur_insert = true;

        }, 
        error => {
          alert(error.error.text)
          this.insertOccurForm.reset()
	        this.occur_insert = false;	
        }
      )
      this.insertOccurForm.reset()
  }


  onSubmit9(){
    console.log(this.insertLikeForm.value);
    
      this.modificationService.insertLikes(this.insertLikeForm.value.likeName, this.insertLikeForm.value.likeBeer).subscribe(
        data=>{
          this.getDrinkers_Likes()
          this.insertLikeForm.reset()
          this.like_insert = true;

        },
        error=>{
          alert(error.error.text)
          this.insertLikeForm.reset();
          this.like_insert = false;

        }
      )
      this.insertLikeForm.reset()
  }
  onSubmitItemUpdate(){
    console.log(this.updateItemForm.value);
    this.modificationService.updateItem(this.updateItemForm.value.itemName, this.updateItemForm.value.itemColumn, this.updateItemForm.value.itemUpdateValue).subscribe(
      data =>{
        console.log(data)
        this.getItems();
        this.updateItemForm.reset();
        this.item_updateStatus = true;
      },
      error =>{
        alert(error.error.text)
        this.updateItemForm.reset();
        this.item_updateStatus = false;

      }
    )
    this.updateItemForm.reset();
    this.item_updateStatus = false;

  }
  onSubmitLikeUpdate(){
    console.log(this.updateLikeForm.value);
    this.modificationService.updateLike(this.updateLikeForm.value.likeDrinker, this.updateLikeForm.value.likeOldVal, this.updateLikeForm.value.likeNewVal).subscribe(
      data =>{
        console.log(data)
        this.updateLikeForm.reset();
        this.like_updateStatus = true;
      },
      error =>{
        console.log(error)
        alert(error.error.text)
        this.updateLikeForm.reset();
        this.like_updateStatus = false;
      }
    )
    this.updateLikeForm.reset();
    this.like_updateStatus = false;

  }
  onSubmitItemInsert(){
    console.log(this.insertItemForm.value);
      this.modificationService.insertItem(this.insertItemForm.value.itemName, this.insertItemForm.value.itemManf, this.insertItemForm.value.itemType).subscribe(
        data=>{
          this.getItems()
          this.insertItemForm.reset()
          this.insertItemStatus = true;

        },
        error =>{
          alert("Duplicate item! Item is already exists.")
          this.insertItemForm.reset()
          this.insertItemStatus = false;

        }
      )
      this.insertItemForm.reset()
  }
  delete_drinker(){
    console.log(this.deleteDrinkerForm.value);
      this.modificationService.deleteDrinker(this.deleteDrinkerForm.value.D_drinkerName).subscribe(
        data=>{
          this.getDrinkers();
          this.getDrinkers_Freqs();
          this.getDrinkers_Likes();
          this.deleteDrinkerForm.reset()
          this.drinker_delete = true;

        },
        error =>{
          alert(error.error.text)
          this.deleteDrinkerForm.reset()
          this.drinker_delete = false;

        }
      )
  }
  delete_Bar(){
    console.log(this.deleteBarForm.value);
      this.modificationService.deleteBar(this.deleteBarForm.value.deleteBar).subscribe(
        data=>{
          this.getBars();
          this.deleteBarForm.reset()
          this.bar_delete = true;
        },
        error =>{
          alert(error.error.text)
          this.deleteBarForm.reset()
          this.bar_delete = false;
        }
      )
  }
  delete_freq(){
    console.log(this.deleteFreqForm.value);
      this.modificationService.deleteFrequent(this.deleteFreqForm.value.D_freqBar, this.deleteFreqForm.value.D_freqName).subscribe(
        data=>{
          this.deleteFreqForm.reset()
          this.freq_delete = true;
        },
        error =>{
          alert(error.error.text)
          this.deleteFreqForm.reset()
          this.freq_delete = false;
        }
      )
  }
  onSubmit10(){
    console.log(this.insertSellsform.value);

      this.modificationService.verifyPattern3_0(this.insertSellsform.value.sellItem).subscribe(
        data=>{
          console.log(data)
          if(data == null){
            this.modificationService.insertSells(this.insertSellsform.value.sellBar, this.insertSellsform.value.sellItem,this.insertSellsform.value.sellPrice).subscribe(
              data=>{
                this.insertSellsform.reset()
                this.sell_insert = true;
              },
              error=>{
                alert(error.error.text)
              }
            )
            this.insertSellsform.reset()
            this.sell_insert=false;
          } else{
            this.modificationService.verifyPattern3_1(this.insertSellsform.value.sellBar, this.insertSellsform.value.sellItem).subscribe(
              data=>{
                console.log(data)
                this.pattern3_q1rownum= data.length;
                this.modificationService.verifyPattern3_2(this.insertSellsform.value.sellBar, this.insertSellsform.value.sellItem,this.insertSellsform.value.sellPrice).subscribe(
                  data=>{
                    this.pattern3_q2rownum = data.length;
      
                    console.log(this.pattern3_q1rownum)
                    console.log(this.pattern3_q2rownum)
      
                    if(this.pattern3_q1rownum == this.pattern3_q2rownum){
                      this.modificationService.insertSells(this.insertSellsform.value.sellBar, this.insertSellsform.value.sellItem,this.insertSellsform.value.sellPrice).subscribe(
                        data=>{
                          this.insertSellsform.reset()
                          this.sell_insert = true;
                        },
                        error=>{
                          alert(error.error.text)
                        }
                      )
                      this.insertSellsform.reset()
                      this.sell_insert = false;
                    } else{
                      alert("Unsatisfy pattern 3! Invalid price.")
                      this.insertSellsform.reset()
                      this.sell_insert = false;
                    }
                  }
                )
              }
            )
          }
        }
      )
      
  }
  onSubmit11(){
    console.log(this.insertHasform.value);
    
      this.modificationService.insertHas(this.insertHasform.value.hasTID, this.insertHasform.value.hasItem).subscribe(
        data=>{
          this.insertHasform.reset()
          this.has_insert = true;
        },
        error=>{
          alert(error.error.text)
          this.insertHasform.reset()
          this.has_insert = false;
        }
      )
  }
  delete_item(){
    console.log(this.deleteItemForm.value);
      this.modificationService.deleteItem(this.deleteItemForm.value.D_itemname).subscribe(
        data=>{
          this.getItems();
          this.deleteItemForm.reset()
          this.item_delete = true;

        },
        error =>{
          alert(error.error.text)
          this.deleteItemForm.reset()
          this.item_delete = false;

        }
      )
  }

  delete_sell(){
    console.log(this.deleteSellForm.value);
      this.modificationService.deleteSell(this.deleteSellForm.value.D_sellBar,this.deleteSellForm.value.D_sellItem).subscribe(
        data=>{
          this.deleteSellForm.reset()
          this.sell_delete = true;
        },
        error =>{
          alert(error.error.text)
          this.deleteSellForm.reset()
          this.sell_delete = false;
        }
      )
  }
  delete_like(){
    console.log(this.deleteLikeForm.value);
      this.modificationService.deleteLike(this.deleteLikeForm.value.D_likename,this.deleteLikeForm.value.D_likeBeer).subscribe(
        data=>{
          this.deleteLikeForm.reset()
          this.like_delete = true;
        },
        error =>{
          alert(error.error.text)
          this.deleteLikeForm.reset()
          this.like_delete = false;
        }
      )
  }
  delete_occur(){
    console.log(this.deleteOccurForm.value);
      this.modificationService.deleteOccur(this.deleteOccurForm.value.D_occurTID,this.deleteOccurForm.value.D_occurBar).subscribe(
        data=>{
          this.deleteOccurForm.reset()
          this.occur_delete = true;
         
        },
        error =>{
          alert(error.error.text)
          this.deleteOccurForm.reset()
          this.occur_delete = false;
          
        }
      )
  }
  delete_has(){
    console.log(this.deleteHasForm.value);
      this.modificationService.deleteHas_valid(this.deleteHasForm.value.D_hasTid, this.deleteHasForm.value.D_hasItem).subscribe(
        data=>{
          this.modificationService.deleteHas_lastItem(this.deleteHasForm.value.D_hasTid).subscribe(
            data=>{

              if(data.length == 1){
                alert("Not allowed to remove last item in Has table with given Transaction id.")
                this.deleteHasForm.reset()
                this.has_delete = false;
                
                return;
              }else{
                this.modificationService.deleteHas(this.deleteHasForm.value.D_hasTid, this.deleteHasForm.value.D_hasItem).subscribe(
                  data=>{
                    this.deleteHasForm.reset()
                    this.has_delete = true;
                    
                    return;
                  }
                )
                this.deleteHasForm.reset()
                this.has_delete = false;
                
              }
            }
          )
        },
        error =>{
          alert(error.error.text)
          this.deleteHasForm.reset()
          this.has_delete = false;
        }
      )
  }
  delete_day(){
    console.log(this.deleteDayForm.value);
      this.modificationService.deleteDay(this.deleteDayForm.value.D_daybar, this.deleteDayForm.value.D_dayDay ).subscribe(
        data=>{
          this.deleteDayForm.reset()
          this.day_delete = true;
        },
        error =>{
          alert(error.error.text)
          this.deleteDayForm.reset()
          this.day_delete = false;
          
        }
      )
  }
  
  delete_pay(){
    console.log(this.deletePayForm.value);
      this.modificationService.deletePay(this.deletePayForm.value.D_payTID,this.deletePayForm.value.D_payPayer).subscribe(
        data=>{
          this.deletePayForm.reset()
          this.pay_delete = true;
        },
        error =>{
          alert(error.error.text)
          this.deletePayForm.reset()
          this.pay_delete = false;
        }
      )
  }
  insert_pay(){
    console.log(this.insertPayForm.value);
    
      this.modificationService.insertPay(this.insertPayForm.value.Pay_tid, this.insertPayForm.value.Pay_name).subscribe(
        data=>{
          this.insertPayForm.reset()
          this.pay_insert = true;
        }, 
        error =>{
          alert(error.error.text)
          this.insertPayForm.reset()
          this.pay_insert = false;
        }
      )
  }
  onSubmitInsertDays(){
    console.log(this.insertDaysForm.value);

    if(this.insertDaysForm.value.dayOpen<this.insertDaysForm.value.dayClose){
      this.modificationService.insertDays(this.insertDaysForm.value.daysName,this.insertDaysForm.value.dayOpen,this.insertDaysForm.value.dayClose,this.insertDaysForm.value.dayDay).subscribe(
        data=>{
          this.day_insert = true;
          this.insertDaysForm.reset()
        },
        error=>{
          alert(error.error.text)
          this.day_insert = false;
          this.insertDaysForm.reset()
        }
      )
      this.day_insert = false;
      this.insertDaysForm.reset()
    }
      this.day_insert=false;
      this.insertDaysForm.reset()
  }
  delete_trans(){
    console.log(this.deleteTransForm.value);
      this.modificationService.deleteTrans(this.deleteTransForm.value.D_transID).subscribe(
        data=>{
          this.deleteTransForm.reset()
          this.trans_delete = true;
        },
        error =>{
          alert(error.error.text)
          this.deleteTransForm.reset()
          this.trans_delete = false;

        }
      )
  }
  onSubmitRedirectBar(){
    console.log(this.redirectBarForm.value.redirecttoBarPage);
    this.router.navigate(['/bars/', this.redirectBarForm.value.redirecttoBarPage]);

  }
  onSubmitFreqsUpdate(){
    console.log(this.updateFreqsForm.value);
    
      this.modificationService.updateFrequent(this.updateFreqsForm.value.freqDrinker, this.updateFreqsForm.value.freqOldBar, this.updateFreqsForm.value.freqNewBar).subscribe(
        data=>{
          this.getDrinkers_Freqs();
          this.updateFreqsForm.reset()
          this.freqs_updateStatus = true;
          this.pattern2_bool = true;
        },
        error=>{
          alert(error.error.text)
          if(error.error.text==="Unsatisfy pattern2! Invalid frequent state."){
            this.updateFreqsForm.reset()
            this.pattern2_bool = false;
            this.freqs_updateStatus = false;
          }else{
            this.updateFreqsForm.reset()
            this.pattern2_bool = null;
            this.freqs_updateStatus = false;

          }
          
        }
      )
      this.updateFreqsForm.reset()
  }

  
update_pay(){
  console.log(this.updatePaysForm.value);
  
    this.modificationService.updatePay(this.updatePaysForm.value.payTID, this.updatePaysForm.value.payOldDrinker, this.updatePaysForm.value.payNewDrinker).subscribe(
      data=>{
        this.updatePaysForm.reset()
        this.pays_updateStatus = true;
      }, 
      error =>{
        alert(error.error.text)
        this.updatePaysForm.reset()
        this.pays_updateStatus = false;
      }
    )
}
onSubmitHasUpdate(){
  console.log(this.updateHasform.value);
  
    this.modificationService.updateHas(this.updateHasform.value.hasTID, this.updateHasform.value.hasOldItem, this.updateHasform.value.hasNewItem).subscribe(
      data=>{
        this.updateHasform.reset()
        this.has_update = true;
      },
      error=>{
        alert(error.error.text)
        this.updateHasform.reset()
        this.has_update = false;
      }
    )
}
onSubmitDaysUpdate(){
  console.log(this.updateDaysForm.value);
  if(this.updateDaysForm.value.daysType == "name"){
    this.modificationService.update_days_bar(this.updateDaysForm.value.daysBarName, this.updateDaysForm.value.daysDay, this.updateDaysForm.value.daysNewValue).subscribe(
      data=>{
        this.updateDaysForm.reset()
        this.day_update = true;
      },
      error=>{
        alert(error.error.text)
        this.updateDaysForm.reset()
        this.day_update = false;
      }
    )
  }else if(this.updateDaysForm.value.daysType == "day"){
    this.modificationService.update_days_daycolumn(this.updateDaysForm.value.daysBarName, this.updateDaysForm.value.daysDay, this.updateDaysForm.value.daysNewValue).subscribe(
      data=>{
        this.updateDaysForm.reset()
        this.day_update = true;
      },
      error=>{
        alert(error.error.text)
        this.updateDaysForm.reset()
        this.day_update = false;
      }
    )
  }else if(this.updateDaysForm.value.daysType == "open"){
    this.modificationService.update_days_pattern1validation_open(this.updateDaysForm.value.daysBarName, this.updateDaysForm.value.daysDay, this.updateDaysForm.value.daysNewValue).subscribe(
      data=>{
        this.updateDaysForm.reset()
        this.day_update = true;
      },
      error=>{
        alert(error.error.text)
        this.updateDaysForm.reset()
        this.day_update = false;
      }
    )
  }
  else if(this.updateDaysForm.value.daysType == "close"){
    this.modificationService.update_days_pattern1validation_close(this.updateDaysForm.value.daysBarName, this.updateDaysForm.value.daysDay, this.updateDaysForm.value.daysNewValue).subscribe(
      data=>{
        this.updateDaysForm.reset()
        this.day_update = true;
      },
      error=>{
        alert(error.error.text)
        this.updateDaysForm.reset()
        this.day_update = false;
      }
    )
  }

}

 
}

