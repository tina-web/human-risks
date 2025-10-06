import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface DataItem {
  id: number;
  type: string,
  title: string,
  description: string,
  textContent?: TextContent,
  chartData?: ChartData[]
}

export interface TextContent {
  text: string,
  percentage?: string
}

export interface ChartDataset {
  label: string;
  borderColor: string;
  backgroundColor?: string,
  pointBackgroundColor?: string;
  pointBorderColor?: string;
  pointHoverBackgroundColor?: string;
  pointHoverBorderColor?: string;
  data: number[];
}

// Represents the full chart structure
export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/data'; // json-server endpoint
  private data$ = new BehaviorSubject<DataItem[]>([]);

  constructor(private http: HttpClient) { }

  /** Load all data from the API */
  loadData(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(this.apiUrl).pipe(
      tap(response => this.data$.next(response))
    );
  }

  /** Get observable for subscribing components */
  getData(): Observable<DataItem[]> {
    return this.data$.asObservable();
  }

  /** Add new data item */
  addData(item: Omit<DataItem, 'id'>): Observable<DataItem> {
    return this.http.post<DataItem>(this.apiUrl, item).pipe(
      tap(() => this.loadData().subscribe())
    );
  }

  /** Delete a data item */
  deleteData(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loadData().subscribe())
    );
  }
}

