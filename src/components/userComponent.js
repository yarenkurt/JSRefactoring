import { BaseLogger, ElsaticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import Employee from "../models/employee.js";
import CustomerService from "../services/customerService.js";
import EmployeeService from "../services/employeeService.js";
import UserService from "../services/userService.js"

console.log("User component loaded")

let logger1 = new MongoLogger();
let userService = new UserService(logger1);
let customerService = new CustomerService(logger1);
let employeeService = new EmployeeService(logger1);


let customerToAdd=new Customer(10,"Ayşe","Fatma","Aydın",30,"1234453");
customerToAdd.type = "customer"
userService.addUser(customerToAdd)
console.log(userService.users)

let employeeToAdd=new Employee(11,"Engin","Demiroğ","Ankara",25,20000);
employeeToAdd.type = "employee"
userService.addUser(employeeToAdd)
console.log(userService.errors)

console.log(userService.users)
console.log(userService.getUserById(11))

console.log(customerService.getAllCustomer())
console.log(employeeService.getAllEmployee())
