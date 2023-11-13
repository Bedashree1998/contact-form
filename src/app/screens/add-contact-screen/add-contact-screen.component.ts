import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cf-add-contact-screen',
  templateUrl: './add-contact-screen.component.html',
  styleUrls: ['./add-contact-screen.component.scss']
})
export class AddContactScreenComponent {
  constructor(private _fb: FormBuilder) {}

  form!: FormGroup;

  // POST /api/register
  /*
    {
      "email":"string",
      "firstName":"string",
      "lastName":"string",
      "dob":"",
      "password":"string",
      "favSingers":["abc", "def"]
    }
  */

    ngOnInit(): void {
      this.initForm();
    }
  
    initForm() {
      this.form = this._fb.group({
        email: ["", [Validators.required, Validators.email]],
        firstname: ["", [Validators.required]],
        lastname: ["", [Validators.required]],
        dob: ["", [Validators.required]],
        phoneNumber: ["",[Validators.required, Validators.minLength(10)]],
        address: ["", [Validators.required]],
        matriculation: ["", [Validators.required]],
        college: ["", [Validators.required]],
        jobTitle: ["", ],
        company: ["", ],
        yearsOfExperience: ["", ],
        officeAddress: ["", ],
        
      });

    

     
}
}
