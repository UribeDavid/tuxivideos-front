import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = this.formBuilder.group({
    id: [null, [Validators.required]],
    name: [null, [Validators.required]],
    lastname: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.required]],
    address: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(5)]],
  });

  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private nzNotificationService: NzNotificationService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.formSubmitted = true;

    if (this.signUpForm.invalid) return;

    this.authService.signUp(this.signUpForm.value).subscribe(
      (response: any) => {
        if (response.status.ok) {
          this.nzNotificationService.success('Exito!', 'Se registró correctamente!');
          this.router.navigate(['/']);
        } else {
          this.nzNotificationService.error('Error!', response.message);
        }
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.nzNotificationService.error('Error!', err.error.message || 'Ha ocurrido un error al realizar la petición!');
      }
    );
  }

  campoNoValido( campo: string ): boolean {
    return !this.signUpForm.get(campo).valid && this.formSubmitted ? true : false;
  }

}
