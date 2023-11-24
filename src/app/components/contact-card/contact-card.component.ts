import { Component, Input } from '@angular/core';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { Contact } from 'src/interfaces/contact';

@Component({
  selector: 'cf-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  constructor(private _contacts: ContactFormService){}

  @Input() contact! : Contact;

}
