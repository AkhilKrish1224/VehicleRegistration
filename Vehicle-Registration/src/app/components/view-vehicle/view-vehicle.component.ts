import { Component } from '@angular/core';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.scss']
})
export class ViewVehicleComponent {
  vehDetails:any={};
  constructor(private service:VehicleServiceService){}
  ngOnInit(){
    this.service.setlogin(true);
    this.vehDetails=this.service.returnDetails();

  }
}
