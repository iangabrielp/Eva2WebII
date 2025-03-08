import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.css'
})
export class DocentesComponent {

  constructor(private route: Router){}

  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['login'])
  }
}
