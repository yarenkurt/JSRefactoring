import { users } from "../data/users.js"
import EmployeeValidator from "../Validators/employeeValidator.js"

export default class EmployeeService{
    constructor(logger){
        this.logger = logger
        this.employeeValidator = new EmployeeValidator
    }

    addEmployee(employee){
        if (!this.employeeValidator.checkEmployeeValidityForErrors(employee)) {
            users.push(employee)
        }
    }

    getAllEmployee(){
        return users.filter(x=>x.type=="employee")
    }

    getEmployeeById(id){
        return users.find(x=>x.id === id && x.type=="employee")
    }
}