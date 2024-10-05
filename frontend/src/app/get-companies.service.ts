import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Company } from "./Company";
import { Observable} from 'rxjs';



@Injectable({
    providedIn: "root"
})

export class GetCompaniesService{

  private url = 'http://localhost:8080/companies/list';


  constructor(private http:HttpClient){}
  
  
  getall():Observable<Company[]>{
      return this.http.get<Company[]>(this.url)
  }
      
  
}