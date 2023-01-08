import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-new-reg',
  templateUrl: './new-reg.component.html',
  styleUrls: ['./new-reg.component.scss']
})
export class NewRegComponent {

  regDetails:any={};

  constructor(private router:Router,private service:VehicleServiceService){}
  ngOnInit(){

  }
  newRegister(){
    if(this.checkPassword()){
      //console.log(this.regDetails);
      this.service.regUser(this.regDetails).subscribe((res)=>{
        console.log(JSON.stringify(res));
        if(res.res==="Success"){
          alert("Registration Successful");
          this.router.navigateByUrl("/login");
        }
        else{
          alert("Registration Failed, Try again");
        }
      })
    }
    else{
      alert("Please recheck password");
    }
  }
  checkPassword(){
    if(this.regDetails.password===this.regDetails.repassword)
    {
      return true;
    }
    else{
      return false;
    }
  }

}
