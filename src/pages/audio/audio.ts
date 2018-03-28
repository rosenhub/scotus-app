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
          avatar: 'assets/img/justices/ruth_bader_ginsburg.jpg',
          name: 'Justice Ginsburg'
        },
        date: 'November 5, 1997',
        title: 'Smith v. State of Texas',
        image: 'assets/img/justices/ruth_bader_ginsburg.jpg',
        audio: 'assets/audio/april2016/15-375.mp3',
        content: 'This landmark case was heard in 1997 and helped determine whether standing for the Pledge of Allegiance can be required in public schools. The decision was in favor of the Plaintiff 4-5 with Justice Ruth Bader Ginsburg writing the final interpretation.',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sarah Connor'
        },
        date: 'May 12, 1984',
        title: 'Bob v. Bob',
        image: 'assets/img/advance-card-tmntr.jpg',
        audio: 'assets/audio/april2016/15-420.mp3',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Dr. Ian Malcolm'
        },
        date: 'June 28, 1990',
        title: 'M. Lewinsky v. W. Clinton',
        image: 'assets/img/advance-card-jp.jpg',
        audio: 'assets/audio/april2016/15-446.mp3',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      }
    ];

  }
}
