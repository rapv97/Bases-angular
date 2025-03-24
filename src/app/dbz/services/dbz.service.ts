import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[] = [
    {
      id: uuid(),
      name : 'Krilin',
      power : 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10000
    }
  ];

  addCharacter( character: Character ): void{

    console.log('Main Page Component', character);

    // con el operador spread,
    // se crea un nuevo objeto con las propiedades
    // del objeto original y pobla el nuevo con todas las propiedades que contiene
    const newCharacter: Character = { ... character, id: uuid()}

    this.character.push( newCharacter);
  }


  deleteCharacterById( id: string ) : void{

    console.log('Main Page Component', id);
    // this.character.splice( index, 1 );
    this.character = this.character.filter( character => character.id !== id );


  }



}
