import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder,
              private nzNotificationService: NzNotificationService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  signIn() {
    localStorage.clear();
    this.authService.signIn(this.signInForm.value).subscribe(
      (response: any) => {
        if ( !response.status.ok ) {
          this.nzNotificationService.error( 'Error!', response.message)
      }
    },
    (err: HttpErrorResponse) => {
      console.log(err);
      this.nzNotificationService.error('Error!', err.error.message || 'Ha ocurrido un error al realizar la petición!');
    });
  }

}
