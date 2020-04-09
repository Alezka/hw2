import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AllUsersComponent } from './all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {AllComentsComponent} from './all-coments/all-coments.component';
import {ComentComponent} from './coment/coment.component';
import {ComentResolverService} from './services/coment-resolver.service';


const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers : UserResolverService}},
  {path: 'coments', component: AllComentsComponent, resolve: {allComents : ComentResolverService}}

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloComponent,
    AllUsersComponent,
    AllComentsComponent,
    ComentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
