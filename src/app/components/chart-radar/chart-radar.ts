import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DataItem } from '../../services/data.service';

@Component({
  selector: 'app-chart-radar',
  imports: [ChartModule],
  templateUrl: './chart-radar.html',
  styleUrl: './chart-radar.scss'
})
export class ChartRadar {
  @Input() public data!: DataItem
  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
          plugins: {
            legend: {
              labels: {
                color: 'green'
              }
            }
          },
          scales: {
            r: {
              grid: {
                color: 'green'
              }
            }
          }
        };
  }
  }
