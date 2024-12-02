import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeviceMainPageComponent} from "./device-main-page/device-main-page.component";
import {AuthentificationComponent} from "./authentification/authentification.component";

const routes: Routes = [
  {path:'auth', component: AuthentificationComponent},
  {path:'device_main_page', component: DeviceMainPageComponent},
  //{path:'', redirectTo:'/auth', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
