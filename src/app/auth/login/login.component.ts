import { BaseService } from 'base/services/base.service';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseService implements OnInit {
  hide = true;
  form: FormGroup = null;
  constructor(
    public override injector: Injector,
    private fb: FormBuilder
  ) {
    super(injector);
    this.initForm();
  }

  ngOnInit() {
    
  }

  initForm() {
    this.form = this.fb.group({
      username: new FormControl<string>('', Validators.compose([Validators.required])),
      password: new FormControl<string>('', Validators.compose([Validators.required])),
    });
  }

  Login() {
    this.router.navigateByUrl('/dashboard');
  }

  clearForm() {
    this.form.reset();
    this.form.patchValue({
      username: '',
      password: '',
    });
    this.form.updateValueAndValidity();
  }
}
