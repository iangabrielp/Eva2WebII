import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent {
  constructor(private route: Router){}
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['login'])
  }

}
