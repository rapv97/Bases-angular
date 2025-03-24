import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css'
})
export class DbzListComponent {

  @Input() characterList: Character[] = [];

  @Output()
  deleteCharacter: EventEmitter<string> = new EventEmitter();
  //FORMA 2 deleteCharacter  = new EventEmitter<number>();

  onDeleteCharacter( index: string): void {

    this.deleteCharacter.emit(index);

  }
}
