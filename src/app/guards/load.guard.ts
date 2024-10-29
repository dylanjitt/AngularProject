// import { CanActivateFn } from '@angular/router';

// export const loadGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment } from "@angular/router";

@Injectable({providedIn:'root'})

export class loadGuard implements CanMatch{
  canMatch(route:Route,segments:UrlSegment[]):boolean{
    console.log("ROUTE: ",route)
    console.log("SEGMENTS: ",segments)
    return true
  }

}
