import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersystemajout',
  templateUrl: './usersystemajout.component.html',
  styleUrls: ['./usersystemajout.component.css']
})
export class UsersystemajoutComponent implements OnInit {

  usersystemrul = "http://127.0.0.1:8000/system_user/new";
  
  usersystemformdata :[];
  myresp = {
    status : 0,
    text : ""
  };

  constructor(private http:HttpClient) { }

  usersysubmit(form:NgForm){
    this.usersystemformdata = form.value;
    console.log(this.usersystemformdata);

    this.http
    .post<any>(this.usersystemrul,this.usersystemformdata)
    .subscribe(
      resp => {
        if(resp.status == 200 ){
          this.myresp.status = resp.status;
          this.myresp.text = ("Donné insérer avec succes ")
        }else{
          this.myresp.status = resp.status;
          this.myresp.text = ("error coté serveur veilez contacter votre admin")
        }
      },
      err => {
        if(err.status == 200 ){
          this.myresp.status = err.status;
          this.myresp.text = ("Donné insérer avec succes ")
        }else{
          this.myresp.status = err.status;
          this.myresp.text = ("error coté serveur veilez contacter votre admin");
        }
      }
    )

  }

  ngOnInit() {
  }


}
