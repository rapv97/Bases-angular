import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  // public characters: Character[] = [];

  constructor( private dbzServie: DbzService ){

  }


  get characters(): Character[] {
    return [... this.dbzServie.character]
  }

  deleteCharacter (  id: string) {
    this.dbzServie.deleteCharacterById(id );
  }

  onNewCharacter( character: Character ): void {
    this.dbzServie.addCharacter( character );
  }


}
