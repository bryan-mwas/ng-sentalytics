import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../core/tweet.service';
// import * as _ from 'underscore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-classified-tweets',
  templateUrl: './classified-tweets.component.html',
  styleUrls: ['./classified-tweets.component.scss']
})
export class ClassifiedTweetsComponent implements OnInit {

  polarity_list = [];
  p: number[] = [];
  tweet_themes: Observable<[any]>;
  selected_theme: number;

  constructor(private _tweetService: TweetService) { }

  ngOnInit() {
    this._tweetService.getPolarityTweets().subscribe(
      data => {
        this.polarity_list = data;
      }
    )
  }

  extractTopic(corpus, index) {
    this.selected_theme = index;
    this._tweetService.getTweetThemes(corpus).subscribe(
      response => {
        console.log(JSON.parse(response['_body'])); 
        this.tweet_themes = JSON.parse(response['_body'])
      }
    );
  }
}
