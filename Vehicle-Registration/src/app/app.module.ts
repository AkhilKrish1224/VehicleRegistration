import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { NewRegComponent } from './components/new-reg/new-reg.component';
import { LoginComponent } from './components/login/login.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { BeforeloginheaderComponent } from './common/beforeloginheader/beforeloginheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ViewDetailsComponent,
    NewRegComponent,
    LoginComponent,
    ViewVehicleComponent,
    BeforeloginheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
