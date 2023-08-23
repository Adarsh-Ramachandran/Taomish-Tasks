import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:{name:string, id:number, s_class:string, address:string}[]=[];
  AddNewStudent(name:string|null|undefined, id:number, s_class:string, address:string){
    if(name)
    this.students.push({name, id, s_class, address});
  }
  RemoveStudent(i:number){
    this.students.splice(i,1);
  }

  constructor() { }
}
