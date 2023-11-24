import { Component } from '@angular/core';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'cf-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  constructor(private _contact: ContactFormService){}

  contacts = this._contact.getContacts;

}
