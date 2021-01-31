import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isSignIn: boolean = true;
  buttonText: string = null;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = this.isSignIn ? 'Create an account!' : 'Have an account? Sign In!'
  }
  
  signUpOrIn() {
    this.isSignIn = !this.isSignIn;
    this.buttonText = this.isSignIn ? 'Create an account!' : 'Have an account? Sign In!'
  }

}
