import { Component } from '@angular/core';
import { LinksComponent } from './links/links.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
