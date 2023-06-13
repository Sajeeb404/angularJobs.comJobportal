import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from './model';
import { Component } from '@angular/core';
import { LoginFormService } from './post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

   forms!: FormGroup;

  constructor(private servise: LoginFormService, private router: Router) { }

  ngOnInit() {
    this.forms = new FormGroup({
      id: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      usertype: new FormControl()
    })
  }


  submit() {
    if (this.forms.value.usertype === 'Employers') {
      this.servise.addTask(this.forms.value).subscribe((res) => {
      });
      this.router.navigateByUrl('employers');
    } if (this.forms.value.usertype === 'Jobs Seekers') {
      this.servise.addTask(this.forms.value).subscribe((res) => {
      });
      this.router.navigateByUrl('JobsSeekers');
    }if (this.forms.value.usertype === 'Admin') {
      this.servise.addTask(this.forms.value).subscribe((res) => {
      });
      this.router.navigateByUrl('Admin');
    }
  }


  
}
