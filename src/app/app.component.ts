import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userSerivce: UserService, private auth: AuthService, router: Router) {
auth.user$.subscribe(user => {
  if (user) {
      userSerivce.save(user);
      // tslint:disable-next-line:prefer-const
      let returnUrl = localStorage.getItem('returnUrl');
      router.navigateByUrl(returnUrl);
  }
});
  }
}

