import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from  './app.routing';

import { HomePageComponent } from './components/homePage.component';
import { CustomerComponent } from './components/customer.component';
import { AttendantComponent } from './components/attendant.component';
import { EditComponent } from './components/edit.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CustomerComponent,
    AttendantComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
