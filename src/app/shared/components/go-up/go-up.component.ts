import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-up',
  templateUrl: './go-up.component.html',
  styleUrls: ['./go-up.component.scss']
})
export class GoUpComponent implements OnInit {

  
  isShown: boolean = false;
  showButtonToGoUp = 200;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll')
  private checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.showButtonToGoUp) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }
  goToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
