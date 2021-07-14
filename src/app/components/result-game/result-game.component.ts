import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-result-game',
  templateUrl: './result-game.component.html',
  styleUrls: ['./result-game.component.scss']
})
export class ResultGameComponent implements OnInit {

  @Input()
  errorsCounter: number = 0;

  @Output()
  close = new EventEmitter();

  resultText: string = '';

  resultPictureSrc: string = '';


  ngOnInit(): void {
    this.onResultRender();
  }

  async onResultRender() {
    let errorsNum = this.errorsCounter;
    if (errorsNum === 0) {
      this.resultText = 'Congratulations!';
      this.resultPictureSrc = 'images/success.jpg';
      await this.playAudio('audio/win.mp3');
    }
    else {
      this.resultText = `Errors: ${errorsNum}`;
      this.resultPictureSrc = 'images/failure.jpg';
      await this.playAudio('audio/losing.mp3');
    }
    this.close.emit();
  }

  playAudio(audioFile: string) {
    return new Promise<void>((resolve, reject) => {
      const audio = new Audio(`assets/${audioFile}`);
      audio.addEventListener('ended', () => resolve());
      audio.addEventListener('error', () => reject());
      audio.play();
    })
  }
}
