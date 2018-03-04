import { Component, Input } from '@angular/core';

/**
 * Generated class for the MyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'verticaltimeline',
  templateUrl: 'verticaltimeline.html'
})
export class VerticalTimeLine {

  @Input() myText:any = [];

  timeData: any = [];
  keys: String[];

  constructor() {
    this.timeData = "";
  }

  ngAfterViewInit() {
    this.timeData = this.myText;
    this.keys = Object.keys(this.timeData);
  }

}
