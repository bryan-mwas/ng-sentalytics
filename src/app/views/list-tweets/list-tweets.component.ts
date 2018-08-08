import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PaginationInstance} from '../../../../node_modules/ngx-pagination';
import { Tweet } from '../../models/tweet';
import { TweetService } from '../../core/tweet.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list-tweets',
  templateUrl: './list-tweets.component.html',
  styleUrls: ['./list-tweets.component.scss']
})
export class ListTweetsComponent implements OnInit {
  toggle_view: boolean = false;
  tweets: Tweet[] = [];
  monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  all: string = 'all';
  // filtered_period_items = [];
  filtered_period: any[];
  filtered_tweets: Tweet[];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
};

  constructor(private _tweetService: TweetService, private _router: Router) { }

  ngOnInit() {
    this.fetchNewTweets();
  }

  private fetchNewTweets() {
    this._tweetService.getTweets()
      .subscribe(tweets => {
        this.tweets = tweets;
        this.filtered_tweets = tweets;
        let item_dates: any[] = tweets.map(item => {
          var long_date = new Date(item.created_date);
          var day = long_date.getDate(); //Date of the month: 2 in our example
          var month = long_date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
          var year = long_date.getFullYear(); //Year: 2013
          var dateFormat = year + "-" + month + "-" + day;
          return dateFormat;
        });
        this.filtered_period = this.distinctPeriodDates(item_dates).sort().reverse();
        console.log(this.filtered_period);
      });
  }

  distinctPeriodDates(period_begin: any[]) {
    let unique = {};
    let distinct = [];
    let res = []; // Holds arrays resulting from the split operation hence, it is multi-dimnsional in nature
    period_begin.forEach((element) => {
      res.push(element.split("-"));
    });
    let combined = [];
    // i is the date from the respective list
    for (let i in res) {
      // Creates a list of the dates i.e Month - Year
      // parseInt => Clears the preceeding 0 in a number
      combined.push(this.monthsList[parseInt(res[i][1], 10)] + '-' + res[i][0]);
    }
    // unique and distinct; Both are used to produce an array with distinct values
    for (var i in combined) {
      if (typeof (unique[combined[i]]) == "undefined") {
        distinct.push(combined[i]);
      }
      unique[combined[i]] = 0;
    }
    // This property is iterated over at the filter period
    return distinct;
    // console.log(this.distinct)
  }

  filterPeriod(tweets: Tweet[], filterBy: string): any {
    console.log("Activated ...");
    if (filterBy == 'all') {
      return this.filtered_tweets = this.tweets;
    }
    let monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let a = filterBy.split('-');
    this.filtered_tweets = tweets.filter(it => new Date(it.created_date).getMonth().toString().toLowerCase().indexOf(monthsList.indexOf(a[0]).toString()) > -1);
    return;
  }

  triggerAnalysis() {
    console.log(this.filtered_tweets)
    this.toggle_view = !this.toggle_view;
    this._tweetService.analyzeTweets(this.filtered_tweets).subscribe(res => {
      console.log(res); // returned in response.body
      this._router.navigate(['/classified']);
    },
      err => {
        console.log("Error occured: ", err);
      });
  }

}
