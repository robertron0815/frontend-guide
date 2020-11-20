import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
})
export class JsComponent implements OnInit {

  greeting: string;

  constructor() {

    const values = ['VW', 'Audi', 'BMW', 'Mercedes Benz'];

    const person = {
      firstName: 'John',
      lastName: 'Doe',
      age: 50,
      eyeColor: 'blue'
    };

    console.log(values, person);

    let x = 0;

    for (let i = 0; i < 5; i++) {
      x += i;
    }

    const time = 19;

    if (time < 20) {
      this.greeting = 'Good day';
    } else {
      this.greeting = 'Good evening';
    }
  }

  ngOnInit(): void {
  }

  /**
   * what does the function do
   * @param foo boolean
   * @returns boolean
   */
  clickHandler = (foo: boolean): boolean => {
    // do something
    return foo;
  }

}
