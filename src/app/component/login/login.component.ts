import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  resMsgErr = '';
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Welcome To Login');
  }

  ngOnInit(): void {
    this.bildForm();
  }
  bildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  formData() {
    // console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.auth.logIn(this.loginForm.value).subscribe((res) => {
        // console.log('res', res);
        if (res.message == 'success') {
          localStorage.setItem('TOKEN', res.token);
          this.router.navigate(['']);
        } else {
          this.resMsgErr = res.message;
        }
      });
    }
  }
}
