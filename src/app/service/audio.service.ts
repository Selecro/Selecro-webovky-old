import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/background-music.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.5;
  }

  playAudio() {
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  }

  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  toggleAudio() {
    if (this.audio.paused) {
      this.playAudio();
    } else {
      this.stopAudio();
    }
  }
}
