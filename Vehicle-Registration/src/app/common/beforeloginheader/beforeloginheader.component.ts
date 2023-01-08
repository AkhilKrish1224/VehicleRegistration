import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beforeloginheader',
  templateUrl: './beforeloginheader.component.html',
  styleUrls: ['./beforeloginheader.component.scss']
})
export class BeforeloginheaderComponent {
  
  constructor(private router:Router){}

  gotoNewreg(){
    this.router.navigateByUrl("/registration");
  }
  gotoLogin(){
    this.router.navigateByUrl("/login");
  }
}
