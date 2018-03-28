import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AudioPage } from './audio';

@NgModule({
  declarations: [
    AudioPage,
  ],
  imports: [
    IonicPageModule.forChild(AudioPage),
    TranslateModule.forChild()
  ],
  exports: [
    AudioPage
  ]
})
export class AudioPageModule { }
