// import { CanActivateFn } from '@angular/router';

// export const guardFormGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn:'root'})

export class GuardForm implements CanDeactivate<any>{
  canDeactivate(
    component: unknown, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState: RouterStateSnapshot
  ): boolean {
      console.log('component: ',component)
      console.log('currentRoute: ',currentRoute)
      console.log('currentState: ',currentState)
      console.log('nextState: ',nextState)

      return confirm("Are you sure you want to leave this page?")
  }
}