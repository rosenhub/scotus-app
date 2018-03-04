import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandmarksPage } from './landmarks';

@NgModule({
  declarations: [
    LandmarksPage,
  ],
  imports: [
    IonicPageModule.forChild(LandmarksPage),
  ],
})
export class LandmarksPageModule {}
