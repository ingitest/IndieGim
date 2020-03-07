import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { DetailGameComponent } from './page/detail-game/detail-game.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail', component: DetailGameComponent },
    { path: 'detail/:id', component: DetailGameComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
] ;



@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent,RegisterComponent,DetailGameComponent]