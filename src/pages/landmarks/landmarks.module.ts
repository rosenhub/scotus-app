import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandmarksPage } from './landmarks';
import  { VerticalTimeLine } from '../../components/verticaltimeline/verticaltimeline';

@NgModule({
  declarations: [
    LandmarksPage,
    VerticalTimeLine
  ],
  imports: [
    IonicPageModule.forChild(LandmarksPage),
  ],
})
export class LandmarksPageModule {}
