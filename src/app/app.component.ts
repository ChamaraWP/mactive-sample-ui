import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fitness-web-app';
  isMenuOpen:boolean = false;

  toggleMenu(value:boolean){
    this.isMenuOpen = value;
  }


}
