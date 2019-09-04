import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersystemlist',
  templateUrl: './usersystemlist.component.html',
  styleUrls: ['./usersystemlist.component.css']
})
export class UsersystemlistComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.getusersystem();
  }

  usersystemsdata: any[];
  usersystemlenght: number;
  usersystemurl = "http://127.0.0.1:8000/system_user/";

  ngOnInit() {
  }

  getusersystem(){
    this.http
    .get<any[]>(this.usersystemurl)
    .subscribe(
      resp => {
        this.usersystemsdata = resp;
        this.usersystemlenght = resp.length;
        console.log(resp);
      }
    )
  }

}
