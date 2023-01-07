import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor(private http:HttpClient) { }


  getDetails(value:any):Observable<any>{
    return this.http.get(`http://localhost:5000/getDetails/${value}`);
  }
  regUser(value:any):Observable<any>{
    return this.http.post(`http://localhost:5000/register`,{data:value});
  }
  loginUser(value:any):Observable<any>{
    return this.http.post(`http://localhost:5000/login`,{data:value});
  }
}

