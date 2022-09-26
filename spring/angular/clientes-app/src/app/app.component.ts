import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicaion en angular';

  curso = 'Curso de angular y spring';
  estudiante: string = 'Freddy Patarroyo'
}
