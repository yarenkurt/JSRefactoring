import { users } from "../data/users.js"
import CustomerValidator from "../Validators/customerValidator.js"

export default class CustomerService {
    constructor(logger) {
        this.logger = logger
        this.customerValidator = new CustomerValidator();
    }

    addCustomer(customer) {
        if (!this.customerValidator.checkCustomerValidityForErrors(customer)) {
            users.push(customer)
        }
    }

    getAllCustomer(){
        return users.filter(x=>x.type=="customer")
    }

    getCustomerById(id){
        return users.find(x=>x.id === id && x.type=="customer")
    }
}