import { Component } from '@angular/core';
import { MenuItem } from './menu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sit down and have something to eat!';
  menu: Array<MenuItem> = [{
    Item: 'Chimken Fingies',
    Category: 'dinner',
    Price: 11.99
  },
  {
    Item: 'Pizza',
    Category: 'dinner',
    Price: 11.99
  },
  {
    Item:'Wings',
    Category:'sides',
    Price: 8.99
  },
  {
    Item: 'Breadsticks',
    Category: 'sides',
    Price: 4.99
  },
  {
    Item: 'Ceasar Salad',
    Category: 'salads',
    Price: 5.99
  },
  {
    Item:'Cinnamon Roll',
    Category:'dessert', 
    Price:8.99
  }]
}


