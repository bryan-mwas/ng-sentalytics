import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../../core/tweet.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  summary: any[];

  constructor(private _tweetService: TweetService) { }

  ngOnInit() {
    this._tweetService.getTweetSummary().subscribe(
      data => {
        this.summary = data;
        console.log(data);
      }
    )
  }
}
