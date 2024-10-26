import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('ROUTE: ', route)
    console.log('STATE: ', state)

    if(this._authService.getUser()) {
      return true
    }

    return  true
  }

}
