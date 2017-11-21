import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../../core/tweet.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  summary: any[];
  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['positive', 'negative', 'neutral'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [1,2,3], label: 'Series A'}
  ];
  

  // Pie
  public pieChartLabels: string[] = ['positive', 'negative', 'neutral'];
  public pieChartData: number[] = [11,12,13];
  public pieChartType = 'pie';


  constructor(private _tweetService: TweetService) { }
  
    ngOnInit() {
      this._tweetService.getTweetSummary().subscribe(
        data => {
          this.summary = data;
          this.barChartData = [{data: [data[1].total_tweets, data[0].total_tweets, data[2].total_tweets], label: 'Series A'}];
          this.pieChartData = [data[1].total_tweets, data[0].total_tweets, data[2].total_tweets];
        });
    }

  // events
  public chartClicked(e: any): void {
    console.log(e.active[0]._model);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
