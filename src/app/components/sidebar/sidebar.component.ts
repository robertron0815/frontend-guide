import { Component, OnInit } from '@angular/core';
import { faCoffee, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
