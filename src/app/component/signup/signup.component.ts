import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  resMsg = '';
  resMsgErr = '';
  resMsgBoolen = false;
  resMsgErrBoolen = false;
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.bildForm();
  }
  bildForm() {
    this.signupForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      age: ['', Validators.required],
      email: ['', [Validators.email, Validators.pattern('.*com$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  formData() {
    console.log(this.signupForm);
    if (this.signupForm.value) {
      this.auth.signUp(this.signupForm.value).subscribe((res) => {
        console.log('res', res);
        if (res.message == 'success') {
          this.signupForm.reset();
          this.signupForm.updateValueAndValidity();
          this.resMsg = res.message;
          this.resMsgBoolen = true;
          this.resMsgErrBoolen = false;
        } else {
          this.resMsgErr = res.errors.email.message;
          this.resMsgErrBoolen = true;
          this.resMsgBoolen = false;
        }
      });
    }
  }
}
