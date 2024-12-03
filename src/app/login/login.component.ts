import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj={
    userName:'',
    email:'',
    password:'',
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.loginObj.userName && this.loginObj.email && this.loginObj.password) {
      alert('Username, email, and password entered correctly.');
      console.log("Form data", this.loginObj);
    } else {
      alert('Please correct the errors before submitting.');
    }
  }
  }


