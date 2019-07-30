import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) {}

    getAllEmployees(){
      //observable must be subscribed
     return this.http.get("http://dummy.restapiexample.com/api/v1/employees")
    }

getEmployeeById(eid):Observable<any>{
  return this.http.get("http://dummy.restapiexample.com/api/v1/employee/"+eid)
}

createEmployee(employee){
 return this.http.post("http://dummy.restapiexample.com/api/v1/create", employee)
}
updateEmployeeById(id, employee){
 return this.http.put("http://dummy.restapiexample.com/api/v1/update/" +id, employee)
}
deleteEmployeeById(eid){
  return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/"+eid)
}
   
}
