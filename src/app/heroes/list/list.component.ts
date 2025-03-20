import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Apiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroDelete:string = '';
  public newHeroName:string = '';

  deleteLastHero():void {
    if(this.heroNames.length === 0) return;

    this.heroDelete = this.heroNames.pop()!;

  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newHeroName = input.value; // Captura el valor del input
  }

  addHero() {
    if (this.newHeroName.trim()) {
      this.heroNames.push(this.newHeroName.trim());
      this.newHeroName = ''; // Limpia la propiedad
    }
  }
}
