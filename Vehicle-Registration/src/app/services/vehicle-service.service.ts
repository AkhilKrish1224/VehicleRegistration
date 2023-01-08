import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  details:any={};
  public login = new BehaviorSubject<any>({});
  loggedin = this.login.asObservable();
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
  setDetails(value:any){
    this.details=value;
  }
  returnDetails(){
    return this.details;
  }
  setlogin(value:any){
    this.login.next(value);
  }
  
}

