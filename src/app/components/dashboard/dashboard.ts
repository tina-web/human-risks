import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Grid } from '../grid/grid';

@Component({
  selector: 'app-dashboard',
  imports: [ ButtonModule, Grid ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
}
