package backend

class CompaniesController {
    CompaniesGetterService companiesGetterService
    
 
    static defaultAction = "list"
   
    def list() { 
        def response = companiesGetterService.getCompanies()
        respond response, formats: ['json']
                          
    }
}