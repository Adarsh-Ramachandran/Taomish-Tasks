import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit {
  title = "student-login";
  studentName="Adarsh";
  constructor(private studentService:StudentService) { 

  }
  ngOnInit(): void {
      
  }
}
