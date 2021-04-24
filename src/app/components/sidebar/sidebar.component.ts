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
  faHome = faHome;
  faCreditCard = faCreditCard;
  faStickyNote = faStickyNote;
  faEnvelope = faEnvelope;
  faCcAmex = faCcAmex;
  faSitemap = faSitemap;
  faUsers = faUsers;
  faDatabase = faDatabase;
  faCog = faCog;
}
