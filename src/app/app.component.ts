import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'frontendGuide';
  isAuthenticated: Observable<boolean>;
  isDoneLoading: Observable<boolean>;
  canActivateProtectedRoutes: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated$;
    this.isDoneLoading = this.authService.isDoneLoading$;
    this.canActivateProtectedRoutes = this.authService.canActivateProtectedRoutes$;

    // start initial login
    this.authService.runInitialLoginSequence();
  }

  /**
   * oAuth loginFlow methods
   */
  login(): void { this.authService.login(); }
  reload() { window.location.reload(); }
  clearStorage() { localStorage.clear(); }
  logoutExternally() {
    window.open(this.authService.logoutUrl);
  }

  get hasValidToken() { return this.authService.hasValidToken(); }
  get accessToken() { return this.authService.accessToken; }
  get refreshToken() { return this.authService.refreshToken; }
  get idToken() { return this.authService.idToken; }
}
