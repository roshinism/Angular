import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from "../../service/employee-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'cts-remote-employee',
  templateUrl: './remote-employee.component.html',
  styleUrls: ['./remote-employee.component.css']
})
export class RemoteEmployeeComponent implements OnInit {

allEmployees:any
selectedEmployee:any
selected=0
newEmployee:any ={}
//name=""
//age=""
//salary=0
myid=""
myname:any=""
myage=""
mysalary=""



 //json obj cannot be displayed in console or in browser (object onbject will come)  
  constructor(private empService:EmployeeServiceService, private router:Router) { }

  ngOnInit() {
  this.getAllEmployees()
  }


  getAllEmployees =function()
  {
    this.empService.getAllEmployees().subscribe((response)=>{
      console.log(response)
      this.allEmployees = response
    })
  }

/*viewEmployee= function(selectedEmployee){
console.log("selected Employee: "+ JSON.stringify(this.allEmployees[selectedEmployee]));
}*/

  viewEmployee= function(selectedEmployee){
    this.selected = this.allEmployees[selectedEmployee].id
    this.empService.getEmployeeById(this.selected).subscribe((response)=>{
        console.log(response)
        this.selectedEmployee = response.employee_name
      })
  }

  deleteEmployee= function(se){
    this.selected = this.allEmployees[se].id
    this.empService.deleteEmployeeById(this.selected).subscribe((response)=>{
        console.log(response)
       this.getAllEmployees()
      })
  }

 

  addEmployee= function(tempEmployee){
    console.log(tempEmployee.value)
    this.newEmployee= tempEmployee.value
     /*this.newEmployee={
     "name":"Damon",
      "salary":"23000",
      "age":"20"
     }*/
    
this.empService.createEmployee(this.newEmployee).subscribe((response)=>{
  console.log(response);
  this.getAllEmployees()
})
  }

  updateEmployee(selectedEmployee){
    this.selected = this.allEmployees[selectedEmployee].id
    this.empService.getEmployeeById(this.selected).subscribe((response)=>{
        console.log(response);
     this.myname = response.employee_name
     this.myage=response.employee_age
     this.mysalary=response.employee_salary
     this.myid=response.id
     console.log(this.myid)
      })
  }


  updateEmployeeNow=function(){
this.newEmployee={
  "name":this.myname,
  "salary":this.mysalary,
  "age":this.myage
}
this.empService.updateEmployeeById(this.myid, this.newEmployee).subscribe((response)=>{
  console.log(response)
  this.getAllEmployees()
})
  }


  viewInSPA(selectedId){
    this.selected = this.allEmployees[selectedId].id
this.router.navigate(['/viewEmployee',this.selected])
  }

  



}

