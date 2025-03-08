import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  constructor (private servicio:LoginService,private route:Router){}

  email:any;
  password:any;
  tipoUsuario:any;

  login(formulario: any) {
    this.servicio.postLogin(formulario.value).subscribe(acceso => {
      let token = acceso.accessToken;
      let usuario = acceso.users; // Extraemos la información del usuario autenticado

      if (token) {
        localStorage.setItem("login", "true");
        localStorage.setItem("tipoUsuario", usuario.tipo); // Guardamos el tipo de usuario

        // Redirigir según el rol del usuario
        if (usuario.tipo === "docente") {
          this.route.navigate(['docentes']);
        } else if (usuario.tipo === "estudiante") {
          this.route.navigate(['estudiantes']);
        } else {
          this.route.navigate(['home']); // Redirección por defecto
        }
      }
    });

  }
}
