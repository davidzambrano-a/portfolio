import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { refresh } from 'aos';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.aos();
  }
  private aos(): void {
    Aos.init();
    window.addEventListener('load', refresh);
  }

}
