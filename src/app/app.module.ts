import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { TranslatePipe } from './service/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
