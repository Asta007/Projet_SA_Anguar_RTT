import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userpartlist',
  templateUrl: './userpartlist.component.html',
  styleUrls: ['./userpartlist.component.css']
})
export class UserpartlistComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.getuserpartlist();
  }

  userparturl="http://127.0.0.1:8000/user/";
  userpartdata: any[];
  userpartlenght: number;

  ngOnInit() {
  }

  getuserpartlist(){
    this.http
    .get<any[]>(this.userparturl)
    .subscribe(
      response => {
        this.userpartdata = response;
        this.userpartlenght = response.length;
        console.log(response);
      }
    )
  }

}
