import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html' 
})
export class ListadoComponent {

  heroes  : string[] = [ 'Spiderman', 'Superman', 'Batman', 'Súper López', 'Pepe Gotera'];
  borrados: any = [];
  

  borrarPrimero(){ 

     const heroeBorrado = this.heroes.shift();
     
     this.borrados.push( heroeBorrado );     
  }

  borrarTodo(){
    this.heroes = [];
  }
}