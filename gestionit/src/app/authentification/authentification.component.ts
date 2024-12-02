import { Component } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  credentials= {email: '', password:''}
  errorMessage: string | null = null

  constructor(private authService: AuthServiceService, private router: Router) {
  }

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.router.navigate(['/device_main_page']);
      },
      error: (err) => {
        this.errorMessage ="Email utilisateur ou mot de passe incorrect.";
      }
    });

  }
}
