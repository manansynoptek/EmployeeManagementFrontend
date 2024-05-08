import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from '../Services/authenticate.service';
import { CommonService } from '../Services/common.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticateService = inject(AuthenticateService);
  const commonService = inject(CommonService);
  const router = inject(Router);
  ///if (authenticateService.currentEmployee && authenticateService.currentEmployeeValue?.employeeId) {
    if (commonService.getEmployeeDetail()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
