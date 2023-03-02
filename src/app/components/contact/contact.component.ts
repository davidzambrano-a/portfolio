import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { refresh } from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.aos();
  }
  private aos(): void {
    Aos.init();
    window.addEventListener('load', refresh);
  }

}
