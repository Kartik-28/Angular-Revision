import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3';
  count=0;
  applyNewCSS = false;
  clickCount:any=[];

 onClick(){
   console.log(this.applyNewCSS);
  this.count++;
  this.clickCount.push(this.count.toString());
 }

 getColor(){
   if(this.count >= 5) {
    this.applyNewCSS=true;
    return "Blue"
   }
    return "White"
  
 }
}
