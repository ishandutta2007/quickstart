import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
//import {Helpers} from 'mystartup_commons';

@Component({selector: 'my-app', template: `
  <h1>Hello {{name}}</h1>
  <iframe width=100% 
  height="500" 
  [src]="url" 
  frameborder="0" 
  allowfullscreen>
  </iframe>`})
export class AppComponent {
  // date:any = Date();
  // v = Helpers.roundMinutes(this.date);
  // tg = Helpers.tags[0];
  baseUrl: string = 'https://s3-us-west-2.amazonaws.com';
  folder: string = 'videoreactions';
  topicUuid: string = '5132686c-6447-4675-4945-4a6f59576468';
  videoUuid: string = '5132686c-6447-4675-4945-4a6f59576468_consolidated.mp4';
  url: any;
  name: any;
  constructor(private sanitizer: DomSanitizer) {
    this.name = 'hfgf';
    this.url = this
      .sanitizer
      .bypassSecurityTrustResourceUrl(this.baseUrl + '/' + this.folder + '/' + this.topicUuid + '/' + this.videoUuid);
  }
}
