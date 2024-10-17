import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import {
  ChartSelectionChangedEvent,
  ChartType,
  GoogleChartsModule,
  Row,
} from "angular-google-charts";
import {
  ChartConfiguration,
  ChartEventEmitOnSelect,
  testCardTable,
  testChartsData,
  testGridTable,
} from "../../Utils/ChartConfiguration";
import { TaskService } from "../../services/tasks/task.service";
import {
  DynamicFieldsConfiguration,
  DynamicFieldsData,
  SelectedFieldValueEmit,
  SetDataOption,
} from "../../Utils/DynamicFieldsConfiguration";
import { PostService } from "../../services/posts/post.service";
import { MapDataToDynamicFieldService } from "../../services/dynamicForm/map-data-to-dynamic-field.service";
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";
import { NgChartsComponent } from "../ng-charts/ng-charts.component";
import { DashardCardConfig, DynamicCardsData, NgxSuperDashboardModule } from "ngx-super-dashboard";
declare const google: any;

@Component({
  selector: "app-dashboard-lend",
  standalone: true,
  imports: [
    CommonModule,
    GoogleChartsModule,
    DynamicFormComponent,
    NgChartsComponent,
    NgxSuperDashboardModule
  ],
  templateUrl: "./dashboard-lend.component.html",
  styleUrl: "./dashboard-lend.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLendComponent implements OnInit, AfterViewInit {
  searchFormFields: DynamicFieldsData[] = DynamicFieldsConfiguration;
  testCardData: DynamicCardsData[] = [ { title: 'Total Proposals', value: 700 }, { title: 'On Process', value: 230 }, { title: 'Sanctioned', value: 300 }, { title: 'Rejected', value: 254 }, { title: 'Opened prending for > 30 days', value: 143 }, { title: 'Disbursed', value: 120 }, ];
  testChartsData = testChartsData
  testCardTable = testCardTable
  testGridTable = testGridTable
 


  constructor(
    private apiService: PostService,
    private dynamicFormService: MapDataToDynamicFieldService
  ) {}

  ngOnInit() {
   
  }

  ngAfterViewInit() {}

  onSelected(e:any){

  }

  onSearchSubmit(e:any){

  }

  selectedChart(e:any){

  }

}
