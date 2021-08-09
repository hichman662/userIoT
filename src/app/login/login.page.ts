import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required ]
  });
  constructor(private router: Router,
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
  }
  async start() {
    this.router.navigateByUrl('/scenarios', { replaceUrl:true });
  }

}
