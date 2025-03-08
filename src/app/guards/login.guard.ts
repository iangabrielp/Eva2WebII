import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const isLoggedIn = localStorage.getItem("login") === "true";
    const tipoUsuario = localStorage.getItem("tipoUsuario"); // Obtenemos el tipo de usuario

    if (isLoggedIn) {
      const url = state.url;

      // Restricciones según el tipo de usuario
      if (tipoUsuario === "docente" && url.startsWith("/estudiantes")) {
        return false; // Docente no puede acceder a estudiantes
      } else if (tipoUsuario === "estudiante" && url.startsWith("/docentes")) {
        return false; // Estudiante no puede acceder a docentes
      }
      
      return true; 
    }
  }

  return false; 
};
