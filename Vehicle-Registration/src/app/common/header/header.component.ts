import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router:Router, private service:VehicleServiceService){}


  gotoNewreg(){
    this.router.navigateByUrl("/registration");
  }
  gotoLogin(){

    this.service.setlogin(false);
    this.router.navigateByUrl("/login");
  }
}
