import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-perform-query',
  templateUrl: './perform-query.component.html',
  styleUrls: ['./perform-query.component.css']
})
export class PerformQueryComponent {
  queryType: string;
  queryData: any = {};
  queryResults: any[];

  constructor(private playerService: PlayerService) {}

  performQuery(): void {
    switch (this.queryType) {
      case 'nationality':
        this.performNationalityQuery();
        break;
      case 'age':
        this.performAgeQuery();
        break;
      case 'totalStats':
        this.performTotalStatsQuery();
        break;
      // Add cases for other query types as needed
    }
  }

  performNationalityQuery(): void {
    this.playerService.queryByNationality(this.queryData.nationality)
      .subscribe(
        data => {
          this.queryResults = data;
        },
        error => {
          console.error('Error performing query:', error);
          // Handle error
        }
      );
  }

  performAgeQuery(): void {
    this.playerService.queryByAgeRange(this.queryData.minAge, this.queryData.maxAge)
      .subscribe(
        data => {
          this.queryResults = data;
        },
        error => {
          console.error('Error performing query:', error);
          // Handle error
        }
      );
  }

  performTotalStatsQuery(): void {
    this.playerService.queryByTotalStatsRange(this.queryData.minTotalStats, this.queryData.maxTotalStats)
      .subscribe(
        data => {
          this.queryResults = data;
        },
        error => {
          console.error('Error performing query:', error);
          // Handle error
        }
      );
  }

  // Implement other query methods as needed
}
