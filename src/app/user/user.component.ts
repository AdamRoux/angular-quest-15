import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = this.fb.group({

  username : [''],
    credentials: this.fb.group({
      email : [''],
      password : [''],
    }),
    address: this.fb.group({
      city: [''],
      zip: [''],
      street: [''],
    
})
  })

  // userForm = new FormGroup({
  // })

  onSubmit() {
    console.log(this.userForm.value);
} 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
