import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDetails:any={};

  constructor(private router:Router,private service:VehicleServiceService){}
  ngOnInit(){

  }
  login(){
    this.service.loginUser(this.loginDetails).subscribe((res)=>{
        if(res.res==="Success"){
          alert("Login Successful");
        } 
        else{
          alert("Login Failed");
        }
    })
  }
}
