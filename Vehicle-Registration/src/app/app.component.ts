import { Component } from '@angular/core';
import { VehicleServiceService } from './services/vehicle-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login:any=false;
  title = 'Vehicle-Registration';
  constructor(private service:VehicleServiceService){
  }
  ngOnInit(){
    this.service.loggedin.subscribe((value)=>{
      console.log(value)
      if(value===true){
        this.login=true;
      }
      else{
        this.login=false;
      }
    })
  }
}
