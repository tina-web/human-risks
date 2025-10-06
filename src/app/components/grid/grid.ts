import { Component, inject } from '@angular/core';
import { InfoCard } from '../info-card/info-card';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DataItem, DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  imports: [InfoCard, AsyncPipe, CommonModule],
  templateUrl: './grid.html',
  styleUrl: './grid.scss'
})
export class Grid {
private dataService = inject(DataService)

protected data$: Observable<DataItem[]> = this.dataService.getData()

  ngOnInit(): void {
    this.dataService.loadData().subscribe();
  }
}
