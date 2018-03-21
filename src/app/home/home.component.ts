import { Component, OnInit } from '@angular/core';
import { GiphService } from '../shared/giph.service';
import { GiphTrendingArray, Giph } from '../shared/giph';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements GiphTrendingArray, OnInit {

  constructor(private GiphService: GiphService) { }

  Giphs: Array<Giph>;

  ngOnInit() {
    this.GiphService.getTrending(this);
  }

  updateTrending(data: Array<Giph>){
      this.Giphs = data;
  }

  find(index: number): Giph {
      return this.Giphs[index];
  }

  findAll(): Array<Giph> {
      return this.Giphs;
  }
}
