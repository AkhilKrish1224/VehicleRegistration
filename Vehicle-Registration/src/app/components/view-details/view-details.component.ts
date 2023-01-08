import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent {

  searchText:any='';

  constructor(private service:VehicleServiceService, private router:Router){}
  ngOnInit(){
    this.service.setlogin(true);

  }
  searchVehicle(){
    console.log(this.searchText);
    this.service.getDetails(this.searchText).subscribe((res)=>{
      this.service.setDetails(res[0]);
      this.router.navigateByUrl("/viewVehicle");
    })
  }
  ngOnChanges(){
  }

}
