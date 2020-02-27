import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-splash',
  templateUrl: './home-page-splash.component.html',
  styleUrls: ['./home-page-splash.component.scss']
})
export class HomePageSplashComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const video: any = document.getElementById('videoElement');
    console.log(this.constructor.name, 'ngOnInit(), video.width = ', video.width);
    console.log(this.constructor.name, 'ngOnInit(), video.height = ', video.height);
    console.log(this.constructor.name, 'ngOnInit(), video.clientHeight = ', video.clientHeight);
    console.log(this.constructor.name, 'ngOnInit(), video.clientWidth = ', video.clientWidth);

    if (video.clientWidth > video.clientHeight) {
      video.width = 100;
      video.height = 100;
    } else {
      video.width = 0;
      video.height = 100;
    }
  }

  startPlayback() {
    setTimeout(() => this.toggleMute(), 100);
  }

  toggleMute() {
    const video: any = document.getElementById('videoElement');

    console.log('toggleMute(), video.muted = ', video.muted);

    // if (video.muted) {
    //   video.muted = false;
    // } else {
    if (!video.muted) {
      // debugger;
      video.muted = true;
      video.play();
    }
  }
}
