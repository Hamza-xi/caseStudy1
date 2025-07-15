import { CanActivateFn, Router  } from '@angular/router';
import { inject } from '@angular/core';
import { AuthserviceService } from '../Servics/authservice.service';

export const authguardGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthserviceService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};