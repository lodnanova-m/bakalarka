import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {
  open = false;
  linksList = ['Home', 'About', 'Store', 'Contact']; // Assuming LinksList is an array of link objects

  toggleOpen(): void {
    this.open = !this.open;
  }
}
