import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenComponent } from './authen/authen.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListrougeComponent } from './listrouge/listrouge.component';
import { OnecompteComponent } from './onecompte/onecompte.component';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { UserpartlistComponent } from './userpartlist/userpartlist.component';
import { OnepartenaireComponent } from './onepartenaire/onepartenaire.component'
import { UserpartajoutComponent } from './userpartajout/userpartajout.component';
import { UsersystemlistComponent } from './usersystemlist/usersystemlist.component';
import { ListpartenaireComponent } from './listpartenaire/listpartenaire.component';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';
import { UsersystemajoutComponent } from './usersystemajout/usersystemajout.component';
import { UserpartoneComponent } from './userpartone/userpartone.component';
import { AuthservicesService } from './service/authservices.service';
import { JwtModule } from "@auth0/angular-jwt";

const myroutes:Routes = [
  { path: '', component:AuthenComponent},
  { path: 'compte-list', component:ListCompteComponent},
  { path: 'listpartenaire', component:ListpartenaireComponent},
  { path: 'ajoutpartenaire', component:AjoutpartenaireComponent},
  { path: 'usersystemlist', component:UsersystemlistComponent},
  { path: 'listrouge', component:ListrougeComponent},
  { path: 'usersystemajout', component:UsersystemajoutComponent},
  { path: 'userpartlist', component:UserpartlistComponent},
  { path: 'userpartone/:id', component:UserpartoneComponent},
  { path: 'userpartajout', component:UserpartajoutComponent},
  { path: 'onecompte', component:OnecompteComponent},
  { path: 'listpartenaire/:id', component:OnepartenaireComponent}
]

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    AuthenComponent,
    ListCompteComponent,
    SidebarComponent,
    OnecompteComponent,
    ListpartenaireComponent,
    ListrougeComponent,
    AjoutpartenaireComponent,
    UserpartajoutComponent,
    UsersystemajoutComponent,
    UsersystemlistComponent,
    UserpartlistComponent,
    OnepartenaireComponent,
    UserpartoneComponent
  ],

  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [AuthservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
