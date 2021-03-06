import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Capitan america';

  nombre2: string = 'fACundo ARiel rIVERO';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      numero: 20,
    },
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('LLego la data');
    }, 4500);
  });

  fecha: Date = new Date();

  idioma: string = 'es';

  cambiarIdioma(idioma: string){
    this.idioma = idioma;
  }

  videoUrl: string = "https://www.youtube.com/embed/dPKaszjLdDM";

  activar: boolean = true;
}
