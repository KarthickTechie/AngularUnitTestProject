import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
} from "@angular/core";
import {
  ChartSelectionChangedEvent,
  ChartType,
  GoogleChartsModule,
} from "angular-google-charts";
import { ChartEventEmitOnSelect } from "../../Utils/ChartConfiguration";
declare const google: any;

@Component({
  selector: "app-ng-charts",
  standalone: true,
  imports: [CommonModule, GoogleChartsModule],
  templateUrl: "./ng-charts.component.html",
  styleUrl: "./ng-charts.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgChartsComponent implements OnInit {
  @Input() chartOptionData: any;
  @Input() chartData: any;
  @Input() chartType: any;

  @Output() chartColumnSelect = new EventEmitter<ChartEventEmitOnSelect>();

  constructor() {}

  ngOnInit() {
    console.log(this.chartType);
  }

  onSelectChart(ev: ChartSelectionChangedEvent, chartType: ChartType) {
    this.chartColumnSelect.emit({
      ev: ev,
      chartType: chartType,
    });
  }
}
