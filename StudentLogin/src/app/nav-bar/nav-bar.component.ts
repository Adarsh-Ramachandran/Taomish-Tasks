import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() user='';
  visibility=false;

  functionToClick (){
    this.visibility=!this.visibility ;
  }
}
