import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
                        'SPIDER-MAN',
                        'CAPITÁN AMÉRICA',
                        'BLACK PANTHER',
                        'GAMORA',
                        'HULK',
                        'IRON MAN',
                        'THOR',
                        'DOCTOR STRANGE'
                      ];
  heroeBorrado : string ='';
  
  borrarHeroe(){
    // console.log('Borrando heroe');
    this.heroeBorrado = this.heroes.shift() || '';
    // console.log(this.heroeBorrado);
  }
}
