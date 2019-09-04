import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listpartenaire',
  templateUrl: './listpartenaire.component.html',
  styleUrls: ['./listpartenaire.component.css']
})
export class ListpartenaireComponent implements OnInit {

  constructor(private http:HttpClient) { 
    this.getallpart();
  }

  listparturl = "http://127.0.0.1:8000/prestataires/";
  partdata :any[];
  partlenght : number;

  ngOnInit() {
  }

  getallpart(){
    this.http
    .get<any[]> (this.listparturl)
    .subscribe(
      resp => {
        this.partdata = resp;
        this.partlenght = resp.length;
        console.log(resp);
      }
    )
  }
}
