import { Component, Input } from '@angular/core';
import { Contact } from 'src/interfaces/contact';

@Component({
  selector: 'cf-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input() contact! : Contact;

}
