import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "John Roberts",
    "profilePic": "assets/img/justices/john_roberts.jpg",
    "about": "Chief Justice since 2005. (R)",
  };


  constructor() {
    let items = [
      {
        "name": "John Roberts",
        "profilePic": "assets/img/justices/john_roberts.jpg",
        "about": "Chief Justice - 2005 (R) John Roberts went to a school in the district of manitoba and lorem"
      },
      {
        "name": "Anthony Kennedy",
        "profilePic": "assets/img/justices/anthony_kennedy.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Clarence Thomas",
        "profilePic": "assets/img/justices/clarence_thomas.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Ruth Bader Ginsburg",
        "profilePic": "assets/img/justices/ruth_bader_ginsburg.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Stephen Bryer",
        "profilePic": "assets/img/justices/stephen_bryer.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Samuel Alito",
        "profilePic": "assets/img/justices/samuel_alito.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Sonia Sotomayor",
        "profilePic": "assets/img/justices/sonia_sotomayor.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "Elena Kagan",
        "profilePic": "assets/img/justices/elena_kagan.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "Neil Gorsuch",
        "profilePic": "assets/img/justices/neil_gorsuch.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "John Paul Stevens (Retired)",
        "profilePic": "assets/img/justices/john_paul_stevens.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "Sandra Day O'Connor (Retired)",
        "profilePic": "assets/img/justices/sandra_day_oconnor.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "David Souter (Retired)",
        "profilePic": "assets/img/justices/david_souter.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
