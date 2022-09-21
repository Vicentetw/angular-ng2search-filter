import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-ng2-search-filter';
  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Argentina',
      ape:'ape1',
    },
    {
      id: 2,
      name: 'Belgium',
      ape:'ape1',
    },
    {
      id: 3,
      name: 'Denmark',
      ape:'ape1',
    },
    {
      id: 4,
      name: 'Montenegro',
      ape:'ape1',
    },
    {
      id: 5,
      name: 'Turkey',
      ape:'ape1',
    },
    {
      id: 6,
      name: 'Ukraine',
      ape:'ape1',
    },
    {
      id: 7,
      name: 'Macedonia',
      ape:'ape1',
    },
    {
      id: 8,
      name: 'Slovenia',
      ape:'ape1',
    },
    {
      id: 9,
      name: 'Georgia',
      ape:'ape1',
    },
    {
      id: 10,
      name: 'India',
      ape:'ape1',
    },
    {
      id: 11,
      name: 'Russia',
      ape:'ape1',
    },
    {
      id: 12,
      name: 'Switzerland',
      ape:'ape1',
    },
    {
      id: 13,
      name: 'United States',
      ape:'ape1',
    }
  ];
    selectEvent(item: string) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e:any) {
    // do something
  }
}
