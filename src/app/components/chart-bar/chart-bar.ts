import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DataItem } from '../../services/data.service';

@Component({
  selector: 'app-chart-bar',
  imports: [ChartModule],
  templateUrl: './chart-bar.html',
  styleUrl: './chart-bar.scss'
})
export class ChartBar {
  @Input() public data!: DataItem
  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: 'grey'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: 'black',
            font: {
              weight: 500
            }
          },
          grid: {
            color:'blue',
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: 'black'
          },
          grid: {
            color: 'grey',
            drawBorder: false
          }
        }
      }
    }
  }
}
