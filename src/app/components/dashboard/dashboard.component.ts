import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleChartsModule , ChartType} from 'angular-google-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  chartType = ChartType.Bar
  myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  
  ];
}
