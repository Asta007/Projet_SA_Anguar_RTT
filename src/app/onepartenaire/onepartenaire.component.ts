import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-onepartenaire',
  templateUrl: './onepartenaire.component.html',
  styleUrls: ['./onepartenaire.component.css']
})
export class OnepartenaireComponent implements OnInit {

  theid:number;
  oneparturl="http://127.0.0.1:8000/prestataires/";
  onepartdata:any[];

  constructor(private route:ActivatedRoute,private http:HttpClient) { 
    this.route.params
    .subscribe(
      params =>{
        console.log(params.id);
        this.theid = params.id;
      });
    this.getpartone(this.theid);
  }

  ngOnInit() {

  }

  getpartone(id:number){
    this.http
    .get<any[]>(this.oneparturl+this.theid)
    .subscribe(
      response => {
        this.onepartdata = response;
        console.log(response);
      } 
      )
  }

  block(id:number){
    this.http
    .get<any[]>(this.oneparturl+this.theid+"/block")
    .subscribe(
      response => {
        this.onepartdata = response;
        console.log(response);
      }
      )
    location.reload();
  }
  
  deblock(id:number){
    this.http
    .get<any[]>(this.oneparturl+this.theid+"/dblock")
    .subscribe(
      response => {
        this.onepartdata = response;
        console.log(response);
      } 
      )
      location.reload();
  }

}
