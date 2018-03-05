import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelinePage } from './timeline';
import  { VerticalTimeLine } from '../../components/verticaltimeline/verticaltimeline';

@NgModule({
  declarations: [
    TimelinePage,
    VerticalTimeLine
  ],
  imports: [
    IonicPageModule.forChild(TimelinePage),
  ],
})
export class TimelinePageModule {}
