import { Component, OnInit } from '@angular/core';
import { GiphService } from '../shared/giph.service';
import { GiphRandom, Giph } from '../shared/giph';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit, GiphRandom {

  constructor(private GiphService: GiphService) { }

  textValue = '';
  selectedValue = 'G';
  giph: Giph = { image: '' };

  ngOnInit() {
    this.getRandom(this.selectedValue, this.textValue);
  }

  getRandom(rating: string, tag: string) {
    this.GiphService.getRandom(this, rating, tag);
  }

  updateRandom(giph: Giph) {
    this.giph = giph;
  }
}
