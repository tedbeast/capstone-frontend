export interface Employee{

  //Login data
    employeeID:number | undefined
    name:string,
    password:string,
    role:string,

    /*
//Manager data
  employeeManagerID:number,
  employeeManagerName:string,
*/
    //Additional data
      email:string,
      phoneNumber:string,
      employeeAddress:string,
      employeeAnniversary:Date

}