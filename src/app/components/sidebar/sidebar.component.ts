import { Component } from '@angular/core';
import {
  faCog,
  faCreditCard,
  faDatabase,
  faEnvelope,
  faHome,
  faSitemap,
  faStickyNote,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  faCcAmex = faCcAmex;
  faCog = faCog;
  faCreditCard = faCreditCard;
  faDatabase = faDatabase;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faSitemap = faSitemap;
  faStickyNote = faStickyNote;
  faUsers = faUsers;
}
