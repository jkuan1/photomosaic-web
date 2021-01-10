import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-function',
  templateUrl: './hello-function.component.html',
  styleUrls: ['./hello-function.component.sass']
})
export class HelloFunctionComponent implements OnInit {

  users : any;

  constructor(private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    let resp = this.http.get("https://jsonplaceholder.typicode.com/users")
    resp.subscribe((data) => this.users=data)
  }

}
