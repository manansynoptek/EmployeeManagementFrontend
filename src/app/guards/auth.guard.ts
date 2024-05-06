import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from '../Services/authenticate.service';

export const authGuard: CanActivateFn = (route, state) => {  
  const authenticateService = inject(AuthenticateService);
  const router = inject(Router);

  if (authenticateService.currentEmployee && authenticateService.currentEmployeeValue?.employeeId) {    
    return true;
  }
  router.navigate(['/login']);
  return false;
};
