import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import  { VerticalTimeLine } from '../../components/verticaltimeline/verticaltimeline';

/**
 * Generated class for the LandmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  timelinedata:any = [
    {
      border: false,
      icon: 'university',
      left: {
        date: '`1790`',
        title: 'SCOTUS Founded',
        content: 'The Supreme Court Of The United States was founded by Congress under Article III of the US Constitution.'
      }
    },
    {
      border: false,
      icon: 'user',
      left: {
        date: '1790',
        title: 'Justice John Jay',
        content: 'President George Washington appoints John Jay as the first Justice.'
      }
    },
    {
      border: true,
      icon: 'balance-scale',
      left: {
        date: '1803',
        title: 'Marbury',
        content: 'President George Washington appoints John Jay as the first Justice.'
      },
      right: {
        date: '1814',
        title: 'Madison',
        content: 'Canada defeats the US.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      right: {
        date: '1534',
        title: 'French Exploration',
        content: 'Jacques Cartier first explores the St. Lawrence region'
      }
    },
    {
      border: true,
      icon: 'users',
      left: {
        date: '1812',
        title: 'War',
        content: 'US invades Canada'
      },
      right: {
        date: '1814',
        title: 'Victory',
        content: 'Canada defeats the US.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      left: {
        date: '1867',
        title: 'Confederation',
        content: 'first four provinces: Québec, Ontario, N.S., and N.B.'
      }
    },
    {
      border: true,
      icon: 'gavel',
      left: {
        date: '1812',
        title: 'War',
        content: 'US invades Canada'
      },
      right: {
        date: '1814',
        title: 'Victory',
        content: 'Canada defeats the US.'
      }
    }

  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LandmarksPage');
  // }

}
