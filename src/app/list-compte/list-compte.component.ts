import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})

export class ListCompteComponent implements OnInit {

  comptedata :any[];
  comptelenght:number;
  prestataires :any[];

  constructor(private http:HttpClient) {
    this.ongetlist();
  }
  
  ngOnInit() {
  }

  ongetlist(){
    this.http
    .get<any[]>('http://127.0.0.1:8000/compte/')
    .subscribe(
      res =>{
        this.comptedata = res;
        this.comptelenght = this.comptedata.length;
        console.log(this.comptedata);
      }
    )
  }

}
