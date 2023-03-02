import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { refresh } from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.aos();
  }
  private aos(): void {
    Aos.init();
    window.addEventListener('load', refresh);
  }

}
