import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {TranslationService} from '../app/service/translation.service';

export class Koltseg {
  datum:string;
  megj:string;
  koltseg:number;
  kat:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:Koltseg[]=[];
  Prices:number[]=[];
  
  constructor(private translationService: TranslationService){}

  addData(obj,obj2,obj3,obj4) {
    if(obj) {
      if(obj2){
        if(obj3){
          this.data.push({
            datum:obj,
            megj:obj2,
            koltseg:obj3,
            kat:obj4
          });
          console.log("Hozzáadva");
          this.Prices = this.data.map(item => item.koltseg);
        }
      }
    }
  }
  delData(dt,megj,kolt,kat) {
    var index = this.data.findIndex(
      x => x.datum === dt, y => y.megj === megj
    );
    this.data.splice(index, 1);
    this.Prices = this.data.map(item => item.koltseg);
  }






  public lineChartLabels: Array<any>;

  public setlabels(arr: Array<any>) {
    this.lineChartLabels = arr;
  }

  public lineChartOptions: any = {responsive: true};
  public lineChartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';



}
