import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";
import {
  GoogleChartsModule,
  ChartType,
  ChartSelectionChangedEvent,
  Row,
} from "angular-google-charts";
import { TaskService } from "../../services/tasks/task.service";
import { CommonModule } from "@angular/common";
import { ChartConfiguration } from "../../Utils/ChartConfiguration";
import { CreateDynamicFormComponent } from "../create-dynamic-form/create-dynamic-form.component";
import {
  DynamicFieldsConfiguration,
  DynamicFieldsData,
  SelectedFieldValueEmit,
  SetDataOption,
  testFieldData
} from "../../Utils/DynamicFieldsConfiguration";
import { PostService } from "../../services/posts/post.service";
import { MapDataToDynamicFieldService } from "../../services/dynamicForm/map-data-to-dynamic-field.service";

declare const google: any;

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, GoogleChartsModule, CreateDynamicFormComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  searchFormFields: DynamicFieldsData[] = DynamicFieldsConfiguration(testFieldData);

  chartType = ChartType.ColumnChart;
  sm1_ChartType = ChartType.PieChart;
  sm2_ChartType = ChartType.BarChart;

  seletedTemp: string = "select";
  templateList = [
    { value: "temp1", name: "Template 1" },
    { value: "temp2", name: "Template 2" },
    { value: "temp3", name: "Template 3" },
  ];

  initianSearchIndex = 0;
  myColumns = [
    ChartConfiguration.SearchCriterias[this.initianSearchIndex],
    "Leads Count",
    { role: "style" },
  ];

  chartOptions = {
    title: `Lead Summary of ${
      ChartConfiguration.SearchCriterias[this.initianSearchIndex]
    }`,
    chartArea: { width: "50%" },
    hAxis: {
      title: `${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
      minValue: 0,
    },
    vAxis: {
      title: "Quantity",
    },
  };
  myData!: Row[];
  taskservice = inject(TaskService);
  chartData$ = this.taskservice.fetchChartsData("zone", true);
  modifiedLovData: any = {
    zoneList: [],
    branchList: [],
    teamsList: [],
    productList: [],
  };
  constructor(
    private apiService: PostService,
    private dynamicFormService: MapDataToDynamicFieldService
  ) {}

  ngOnInit() {
    this.getZoneDropDownsData();
    this.getBranchDropDownsData();
    this.getTeamsDropDownsData();
    this.getProductDropDownsData();
  }

  ngAfterViewInit() {}

  onSelectChart(e: ChartSelectionChangedEvent) {
    console.log(e);
    this.initianSearchIndex += 1;
    if (this.initianSearchIndex < ChartConfiguration.SearchCriterias.length) {
      this.chartData$ = this.taskservice.fetchChartsData(
        ChartConfiguration.SearchCriterias[this.initianSearchIndex],
        true
      );

      this.chartOptions = {
        ...this.chartOptions,
        title: `Lead Summary of ${
          ChartConfiguration.SearchCriterias[this.initianSearchIndex]
        }`,
        hAxis: {
          title: `${
            ChartConfiguration.SearchCriterias[this.initianSearchIndex]
          }`,
          minValue: 0,
        },
      };
    }
  }

  getZoneDropDownsData() {
    // get data from extenal service for field dropdown data
    this.apiService
      .getDataFromLocal("zoneleadsummary")
      .subscribe((dataList: any) => {
        this.modifiedLovData.zoneList = dataList ? dataList.data : "";
        // assign lov data to dynamic field and add same properties for all dynamic field lovdata for unique select values:
        // example: {optCode:1, optDesc: 'latha'}
        if (
          this.modifiedLovData.zoneList &&
          this.modifiedLovData.zoneList.length > 0
        ) {
          this.assignFetchedLOVDataToDynamicFields("zone", "zoneList");
        }
      });
  }

  getBranchDropDownsData() {
    // get data from extenal service for field dropdown data
    this.apiService
      .getDataFromLocal("branchleadsummary")
      .subscribe((dataList: any) => {
        this.modifiedLovData.branchList = dataList ? dataList.data : "";
        // assign lov data to dynamic field and add same properties for all dynamic field lovdata for unique select values:
        // example: {optCode:1, optDesc: 'latha'}
        if (
          this.modifiedLovData.branchList &&
          this.modifiedLovData.branchList.length > 0
        ) {
          this.assignFetchedLOVDataToDynamicFields("branch", "branchList");
        }
      });
  }
  getTeamsDropDownsData() {
    // get data from extenal service for field dropdown data
    this.apiService
      .getDataFromLocal("teamsleadsummary")
      .subscribe((dataList: any) => {
        this.modifiedLovData.teamsList = dataList ? dataList.data : "";
        console.log(dataList);
        // assign lov data to dynamic field and add same properties for all dynamic field lovdata for unique select values:
        // example: {optCode:1, optDesc: 'latha'}
        if (
          this.modifiedLovData.teamsList &&
          this.modifiedLovData.teamsList.length > 0
        ) {
          this.assignFetchedLOVDataToDynamicFields("teams", "teamsList");
        }
      });
  }
  getProductDropDownsData() {
    // get data from extenal service for field dropdown data
    this.apiService
      .getDataFromLocal("productleadsummary")
      .subscribe((dataList: any) => {
        this.modifiedLovData.productList = dataList ? dataList.data : "";
        if (this.modifiedLovData.productList.length > 0) {
          this.assignFetchedLOVDataToDynamicFields("product", "productList");
        }
      });
  }

  assignFetchedLOVDataToDynamicFields(type: string, arraylistKey: string) {
    try {
      this.searchFormFields.forEach(async (item: DynamicFieldsData) => {
        if (item.formControlKey == type) {
          if (
            "value" in this.modifiedLovData[arraylistKey][0] &&
            "name" in this.modifiedLovData[arraylistKey][0]
          ) {
            item.lovDataList = this.modifiedLovData[arraylistKey];
          } else {
            let option: SetDataOption = {
              fetchLovData: this.modifiedLovData[arraylistKey],
              value: "usrId",
              name: "usrFirstname",
            };
            item.lovDataList = await this.dynamicFormService.setLovPropertyKeys(
              option
            );
          }
        }
        // else if (item.formControlKey == type) {
        //   item.lovDataList = this.modifiedLovData.branchList;
        // } else if (item.formControlKey == type) {
        //   item.lovDataList = this.modifiedLovData.listofTeamusers;
        // } else if (item.formControlKey == type) {
        //   let option: SetDataOption = {
        //     fetchLovData: this.modifiedLovData.listofTeamMemberusers,
        //     value: "usrId",
        //     name: "usrFirstname",
        //   };
        //   item.lovDataList = await this.dynamicFormService.setLovPropertyKeys(
        //     option
        //   );
        // }
      });
      console.log(this.searchFormFields);
    } catch (err) {
      console.log(err);
    }
  }

  // get selected field dropDown value and formcontrol name

  seletedValue(ev: SelectedFieldValueEmit) {
    if (ev.fieldControlName == "zonal") {
      let zonalOrgCode = this.modifiedLovData.listOfZonal.find((val: any) => {
        return val.value == ev.selectedValue;
      }).orgCode;
      if (zonalOrgCode) {
        let branchData = this.modifiedLovData.organisationsList.filter(
          (val: any) => {
            return val.zonalCode == zonalOrgCode;
          }
        );
        this.assignFilteredDataToChildDropdown(branchData);
      }
    }
  }

  assignFilteredDataToChildDropdown(
    filterData: Record<string, string | number | null | undefined>
  ) {
    this.searchFormFields.forEach((item: any) => {
      item.formControlKey == "branch" ? (item.lovDataList = filterData) : "";
    });
  }

  submitFormData(formData: any) {
    console.log(formData);
  }

  selectTemplate(ev: any) {
    this.seletedTemp = ev.target.value;
  }
}

/*

zonal data - name - zone name , value - number 

onselection of zone - show branches lead summary 


*/
