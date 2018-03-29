import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html'
})
export class AudioPage {
  cardItems: any[];

  constructor(public navCtrl: NavController, nativeAudio: NativeAudio) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/arguments/usaflag.jpeg',
          name: 'Docket #'
        },
        date: '02/27/18',
        docket: '17-2',
        title: 'United States v. Microsoft',
        image: 'assets/img/arguments/usaflag.jpeg',
        audio: 'assets/audio/17-2.mp3',
        content: 'This landmark case was heard in 1997 and helped determine whether standing for the Pledge of Allegiance can be required in public schools. The decision was in favor of the Plaintiff 4-5 with Justice Ruth Bader Ginsburg writing the final interpretation.',
      },
      {
        user: {
          avatar: 'assets/img/arguments/ohioflag.jpg',
          name: 'Docket #'
        },
        date: '02/26/2018',
        docket: '16-1454',
        title: 'Ohio v. American Express',
        image: 'assets/img/arguments/ohioflag.jpg',
        audio: 'assets/audio/16-1454.mp3',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'assets/img/arguments/floridaflag.jpg',
          name: 'Docket #'
        },
        date: '01/08/18',
        docket: '142-Orig',
        title: 'Florida v. Georgia',
        image: 'assets/img/arguments/floridaflag.jpg',
        audio: 'assets/audio/142-Orig.mp3',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      },
      {
        user: {
          avatar: 'assets/img/arguments/texasflag.jpg',
          name: 'Docket #'
        },
        date: '04/18/16',
        docket: '15-674',
        title: 'United States v. Texas (DACA)',
        image: 'assets/img/arguments/texasflag.jpg',
        audio: 'assets/audio/15-674.mp3',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      },
      {
        user: {
          avatar: 'assets/img/arguments/michiganflag.jpg',
          name: 'Docket #'
        },
        date: '03/25/15',
        docket: '14-46',
        title: 'Michigan v. The EPA',
        image: 'assets/img/arguments/michiganflag.jpg',
        audio: 'assets/audio/15-674.mp3',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      }
    ];

  }
}
