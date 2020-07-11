import {Component} from '@angular/core';
import {User} from './models/user.model';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(private accountService: AuthService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

}
