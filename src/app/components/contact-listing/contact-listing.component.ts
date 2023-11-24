import { Component, Input } from '@angular/core';
import { Contact } from 'src/interfaces/contact';

@Component({
  selector: 'cf-contact-listing',
  templateUrl: './contact-listing.component.html',
  styleUrls: ['./contact-listing.component.scss']
})
export class ContactListingComponent {
  @Input() contacts: Contact[]= [];

}
