import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userpartone',
  templateUrl: './userpartone.component.html',
  styleUrls: ['./userpartone.component.css']
})
export class UserpartoneComponent implements OnInit {

  routeparams:any;
  oneuserparturl = "http://127.0.0.1:8000/user/";
  oneuserpartdata:any[];

  constructor( private http:HttpClient, private router: Router,private activatedroute:ActivatedRoute) {
    this.activatedroute.params
    .subscribe(
      params => {
        this.routeparams = params;
        // console.log(this.routeparams.id);
      }
    );
    this.getoneuserpart(this.routeparams.id);
   }

   getoneuserpart(id:number){
      this.http
      .get<any[]>(this.oneuserparturl+this.routeparams.id)
      .subscribe(
        response =>{
          this.oneuserpartdata = response;
          console.log(response);
        }
      )
   }

  ngOnInit() {
  }

}
