package backend



class BootStrap {

    def init = { servletContext ->
        def acme = new Company(name: 'Acme', segment: 'Technology').save()
        def itau = new Company(name: 'Itaú', segment: 'Banking').save()
        def macdonalds = new Company(name: 'MacDonalds', segment: 'Food').save()
    }
    def destroy = {
    }
}
