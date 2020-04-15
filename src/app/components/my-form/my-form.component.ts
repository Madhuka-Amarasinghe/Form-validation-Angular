import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.validateMyForm();
  }
  validateMyForm() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    });
  }
  myFormSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.saveMyForm();
  }
  saveMyForm() {
    // Save method implementations
    console.log('Im Madhuka ,Almost Done Here');
  }
}
