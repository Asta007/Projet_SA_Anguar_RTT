import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthservicesService } from '../service/authservices.service';
import { JwtHelperService } from "@auth0/angular-jwt";
 
const helper = new JwtHelperService();

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {

  authentformdata = {};
  mytoken : string;
  decodedmytoken :any;

  constructor(private http:HttpClient,private auth:AuthservicesService) { }

  ngOnInit() {
  }

  authensubmit(){
      this.auth.login(this.authentformdata)
      .subscribe(
        resp => {
          const tok = resp.token;
          localStorage.setItem('token',tok)
          // this.mytoken = resp;
          console.log(tok);
          console.log(helper.decodeToken(tok));
        }
      )
      // this.decodedmytoken = this.helper.decodeToken(this.mytoken)
      // console.log("decodedmytoken");
  }
}
