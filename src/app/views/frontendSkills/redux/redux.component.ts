import { Component, OnInit } from '@angular/core';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html'
})
export class ReduxComponent implements OnInit {
  faHandPointRight = faHandPointRight;

  constructor() { }

  ngOnInit(): void {
  }

}
