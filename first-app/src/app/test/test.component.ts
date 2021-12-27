import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

Server_ID = 10;
serverStatus = "No Server is created!";
allowNewServer = true;

constructor() {
  setTimeout(() => {
    this.allowNewServer = false;
  },2000);
}

ngOnInit(): void {
}

onServerCreated() {
  this.serverStatus = "Server created";
}

}
