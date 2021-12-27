import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3';
  clickCount:any=[];
  showSecret=false;

 onClick(){
  this.clickCount.push(this.clickCount.length+1);
  this.showSecret = !this.showSecret;
  
 }

}
