import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  username = "";

  checkEmpty(){
    if (this.username == ""){
      return true;
    }
      else{
      return false;
      }
  }

  resetUsername(){
    this.username = "";
  }
}
