import { Component, Input } from '@angular/core';
import { ChartRadar } from '../chart-radar/chart-radar';
import { ChartBar } from "../chart-bar/chart-bar";
import { Observable } from 'rxjs';
import { DataItem } from '../../services/data.service';


@Component({
  selector: 'app-info-card',
  imports: [ChartRadar, ChartBar],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss'
})
export class InfoCard {
  @Input() public dataItem!: DataItem

}
