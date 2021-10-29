import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hidePassword = true;
  requiredMessage = 'jest wymaganym polem';
  snackbarDurationInSeconds = 4;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }

  get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  openSnackBar(error: HttpErrorResponse): void {
    let message = 'Coś poszło nie tak - błąd serwera';
    if (error.status === 401) {
      message = 'Podano błędną nazwę użytkownika lub hasło';
    }

    this.snackBar.open(message,
      '', {duration: this.snackbarDurationInSeconds * 1000, panelClass: ['snackbar']}
    );
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login({username: this.username!.value, password: this.password!.value}).subscribe(
        () => this.router.navigateByUrl(this.authService.redirectUrl),
        (error: HttpErrorResponse) => this.openSnackBar(error)
      );
    }
  }
}
