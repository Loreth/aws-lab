import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuClicked = new EventEmitter<boolean>()

  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }
}
