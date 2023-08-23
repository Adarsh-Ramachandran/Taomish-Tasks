import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
    form!:FormGroup;

    studentForm(){
      console.log(this.form.value);
    }
    constructor(private studentService:StudentService,private http:HttpClient) { 

    }
    ngOnInit(): void {
      this.createNewForm();
    }

    createNewForm(data?:any){
      this.form=new FormGroup({
        student: new FormControl('',[Validators.required]),
        id: new FormControl(),
        studentClass :new FormControl(),
        address : new FormControl()
      })

      if(data)this.form.patchValue(data);
    }

     addStudent(){
      this.studentService.AddNewStudent(this.form.value.student,this.form.value.id,this.form.value.studentClass,this.form.value.address);
      // this.form.reset()
      this.http.post("http://localhost:3000/student",this.form.value).subscribe((resp:any)=>{
        console.log(resp);
      },error=>{
        console.log("-----------Error");
      })
      this.createNewForm();
     }
}

