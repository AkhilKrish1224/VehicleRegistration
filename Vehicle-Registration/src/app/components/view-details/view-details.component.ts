import { Component } from '@angular/core';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent {

  searchText:any='';

  constructor(private service:VehicleServiceService){}
  ngOnInit(){

  }
  searchVehicle(){
    console.log(this.searchText);
    this.service.getDetails(this.searchText).subscribe((res)=>{
      alert(JSON.stringify(res));
    })
  }
  ngOnChanges(){
  }

}
