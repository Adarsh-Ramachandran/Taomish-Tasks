import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  students:{name:string, id:number, s_class:string, address:string}[]=[];
  constructor(private studentService:StudentService,private http:HttpClient) { 

  }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/student").subscribe((resp:any)=>{
      this.students=resp;
    })
      // this.students= this.studentService.students
  }
  removeRow(i:number){
    this.studentService.RemoveStudent(i);
   }
}
