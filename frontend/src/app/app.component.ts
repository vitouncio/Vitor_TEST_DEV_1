import { Component, OnInit } from '@angular/core';
import { Company } from './Company';
import { GetCompaniesService } from './get-companies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GetCompaniesService]
})

export class AppComponent {
  title = 'frontend';
  
  
  
  candidate = 'Vitor Pereira de Olveira';
  companies: Company[];
  searchValue: string;
  
  
  constructor(private compSvc: GetCompaniesService){}
  ngOnInit() {
        
  }
  listCompanies(){
    this.compSvc.getall().subscribe((res:Company[]) =>{
      this.companies = res;
    },
    (error) => {
      console.error('Error fetching companies:', error);
    }
  );
}
  
filteredCompanies(): Company[] {
  if (!this.searchValue) {
    return this.companies;
  }
  return this.companies.filter(company =>
    company.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
    company.segment.toLowerCase().includes(this.searchValue.toLowerCase())
  );
}
  
}