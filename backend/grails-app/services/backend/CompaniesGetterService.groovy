package backend

import grails.gorm.transactions.Transactional

@Transactional
class CompaniesGetterService {

    def getCompanies() {
        return Company.list()     
    }
}
