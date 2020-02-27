import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page-splash",
  templateUrl: "./home-page-splash.component.html",
  styleUrls: ["./home-page-splash.component.scss"]
})
export class HomePageSplashComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  startPlayback() {
    setTimeout(() => this.toggleMute(), 100);
  }

  toggleMute() {
    const video: any = document.getElementById("videoElement");

    console.log("toggleMute(), video.muted = ", video.muted);

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
