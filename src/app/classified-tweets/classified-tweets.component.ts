import { Component, OnInit } from '@angular/core';
import { TweetService } from '../core/tweet.service';
import { PagerService } from '../core/pager.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-classified-tweets',
  templateUrl: './classified-tweets.component.html',
  styleUrls: ['./classified-tweets.component.scss']
})
export class ClassifiedTweetsComponent implements OnInit {

  polarity_list = [];
  positive = [];
  negative = [];
  neutral = [];
  p: number[] = [];

  // array of all items to be paged
  // private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private _tweetService: TweetService, private pagerService: PagerService) { }

  ngOnInit() {
    this._tweetService.getPolarityTweets().subscribe(
      data => {
        this.polarity_list = data;
        data.forEach(item => {
          if(item.name == 'positive') {
            this.positive = item.tweets;
          }
          if(item.name == 'negative') {
            this.negative = item.tweets;
          }
          if(item.name == 'neutral') {
            this.neutral = item.tweets;
          }
        });
        console.log(this.positive, this.negative, this.neutral)
        this.setPage(1);
      }
    )
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.negative.length, page);

    // get current page of items
    this.pagedItems = this.negative.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
