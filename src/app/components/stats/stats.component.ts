import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  progress_stats = [
    {
      month: 'Jan',
      progress: '152',
    },
    {
      month: 'Feb',
      progress: '123',
    },
    {
      month: 'Mar',
      progress: '75',
    },
    {
      month: 'Apr',
      progress: '143',
    },
    {
      month: 'May',
      progress: '184',
    },
    {
      month: 'Jun',
      progress: '143',
    },
    {
      month: 'Jul',
      progress: '100',
    },
    {
      month: 'Aug',
      progress: '120',
    },
    {
      month: 'Sep',
      progress: '168',
    },
    {
      month: 'Oct',
      progress: '120',
    },
    {
      month: 'Nov',
      progress: '145',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
