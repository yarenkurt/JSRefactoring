import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import CustomerService from "./customerService.js"
import EmployeeService from "./employeeService.js"

export default class UserService {
    constructor(loggerService) {
        this.users = users
        this.errors = []
        this.loggerService = loggerService
        this.customerService = new CustomerService();
        this.employeeService = new EmployeeService();
    }

    addUser(user) {
        switch (user.type) {
            case "customer":
                this.customerService.addCustomer(user);
                break;
            case "employee":
                this.employeeService.addEmployee(user);
                break;
            default:
                this.errors.push(new DataError("This user cannot be added.Wrond User Type", user))
                break;
        }
        this.loggerService.log(user)
    }

    getAllUsers() {
        return users
    }

    getUserById(id) {
        return this.users.find(u=>u.id === id)
    }

    getUsersSorted(){
       return this.users.sort((user1,user2)=>{
            if(user1.firstName>user2.firstName){
                return 1;
            }else if(user1.firstName===user2.firstName){
                return 0;
            }else{
                return -1;
            }
        })
    }

}