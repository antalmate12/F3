import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
        }
      }
    }
  }
}
