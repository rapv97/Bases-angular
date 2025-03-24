import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
@Output()
onNewCharacter: EventEmitter<Character> = new EventEmitter();

public character: Character = {
  id: '',
  name: '',
  power: 0
};

emitCharacter(){

  // debugger;
  console.log(this.character);

  if(this,this.character.name.length === 0) return;

  this.onNewCharacter.emit(this.character);

  this.character = {
    id: '',
    name: '',
    power: 0
  };


}
}
