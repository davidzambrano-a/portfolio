import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuActive: boolean = false;
  burgerActive: boolean = false;
  backgroundActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.menuActive = !this.menuActive;
  }
  closeMenu(): void {
    if (this.menuActive === true) this.menuActive = !this.menuActive;
  }
  openBurgerMenu(): void {
    this.burgerActive = !this.burgerActive;
  }
  closeBurgerMenu(): void {
    if (this.burgerActive === true) this.burgerActive = !this.burgerActive;
  }
  openBackground(): void {
    this.backgroundActive = !this.backgroundActive;
  }
  closeBackground(): void {
    if (this.backgroundActive === true) this.backgroundActive = !this.backgroundActive;
  }

}
