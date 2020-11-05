import { Component, OnInit } from '@angular/core';
import { EmailRegister } from '../../../models/emailRegister';
import { LoggerService } from '../../../services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.page.html',
  styleUrls: ['./email-registration.page.scss'],
})
export class EmailRegistrationPage implements OnInit {

  emailRegisterData: EmailRegister = new EmailRegister();
  isLogin: boolean;
  loginForm: FormGroup;
  step = 0;

  constructor(
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isLogin = this.router.getCurrentNavigation().extras.state.isLogin;
      }
    });
  }

  ngOnInit() {
    if (this.isLogin) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    }
  }

  nextStep() {
    this.step++;
  }

  register() {
    this.logger.log('emailRegister: ', this.emailRegisterData);
    this.httpService.postData('/register', this.emailRegisterData).subscribe(
      res => {
      this.logger.log('server res: ', res);
      this.nextStep();
      localStorage.setItem('user', JSON.stringify(res));
    },
      error => {
        this.logger.log(error);
        this.step = 0;
      });

  }

  login() {
    this.logger.log('this.loginForm', this.loginForm.value);
    this.httpService.postData('/login', this.loginForm.value).subscribe(
      res => {
        this.logger.log('server res: ', res);
        this.router.navigate(['bakery-search']);
      },
      error => this.logger.log(error));
  }

}
