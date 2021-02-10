import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isAuthenticated: Observable<boolean>;
  faChevronRight = faChevronRight;

  public version: string;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated$;
    this.version = version;
  }

  /**
   * get claims from id token
   */
  get identityClaims() {
    return this.authService.identityClaims;
  }

  /**
   * format username from claims
   */
  get username() {
    let name = '';
    let claims: any = this.identityClaims;

    if (!claims)
      return;

    let nameArray = (claims.unique_name.split('\\')[1]).split('.');
    for (let namePart of nameArray) {
      name = name + namePart.charAt(0).toUpperCase() + namePart.slice(1) + ' ';
    }
    name = name.trim();

    return name;
  }
}
