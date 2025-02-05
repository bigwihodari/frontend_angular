import { Component } from '@angular/core';
import {AuthServiceService} from "./auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionit';
  isLoggedIn = false;

  constructor(private authService: AuthServiceService) {
    //this.isLoggedIn = authService.isLoggedIn();
    //this.authService.
  }
}
