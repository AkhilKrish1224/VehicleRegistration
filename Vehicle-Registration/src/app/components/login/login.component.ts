import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDetails:any={};
  isEmailflag:boolean=false;

  constructor(private router:Router,private service:VehicleServiceService, private location: LocationStrategy){
    history.pushState(null, "null", window.location.href);  
this.location.onPopState(() => {
  history.pushState(null, "null", window.location.href);
});  
  }
  ngOnInit(){

  }
  login(){
    this.service.loginUser(this.loginDetails).subscribe((res)=>{
        if(res.res==="Success"){
          alert("Login Successful");
          this.router.navigateByUrl("/view");
          this.service.setlogin(true);
        } 
        else{
          alert("Login Failed");
          this.service.setlogin(false);
        }
    })
  }
  isEmail(){
    if(this.loginDetails?.email?.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")){
      this.isEmailflag=true;
    }
    else{
      this.isEmailflag=false;
    }
  }
}
