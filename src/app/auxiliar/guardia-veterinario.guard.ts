import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

export const guardiaVeterinarioGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(LoginServiceService);

  if (localStorage.getItem('token')) {
    // If there is a token, try to get the user role
    authService.getRole().subscribe(
      (role) => {
        // Check if the user has the required role (replace 'requiredRole' with the actual role you are checking for)
        if (role[0] === 'VETERINARIO') {
          // User has the required role, allow access to the route
          return true;
        } else {
          // User does not have the required role, navigate to a different route
          router.navigate(['/login']);
          return false;
        }
      },
      (error) => {
        // Handle error while fetching user role
        console.error('Error fetching user role', error);
        router.navigate(['/login']);
        return false;
      }
    );
  } else {
    // No token found, navigate to login
    router.navigate(['/login']);
    return false;
  }
  


  return true;
};
