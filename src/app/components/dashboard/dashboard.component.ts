import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild, inject } from '@angular/core';
import {GoogleChartsModule , ChartType, ChartSelectionChangedEvent, getPackageForChart, ScriptLoaderService, Row, Column} from 'angular-google-charts';
import { TaskService } from '../../services/tasks/task.service';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from '../../Utils/ChartConfiguration';
declare const google:any;
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,GoogleChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit,AfterViewInit{
  private readonly chartPackage = getPackageForChart(ChartType.BarChart);
  @ViewChild('container', { read: ElementRef })
  private containerEl!: ElementRef<HTMLElement>;

  chartType = ChartType.ColumnChart

  initianSearchIndex = 0
  myColumns = [ChartConfiguration.SearchCriterias[this.initianSearchIndex], 'Leads Count',{role:'style'}]

  chartOptions = {
    title: `Lead Summary of ${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
    chartArea: {width: '50%'},
    hAxis: {
      title: `${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
      minValue: 0
    },
    vAxis: {
      title: 'Quantity'
    }
  };
  myData!:Row[] 
  taskservice = inject(TaskService)
  chartData$  = this.taskservice.fetchChartsData('zone',true)
  constructor(private loaderService: ScriptLoaderService){  
   
    }
  ngOnInit(): void {
   
    
  }

  
  ngAfterViewInit(): void {

   
  }


  drawBasic(){
   
    const data = google.visualization.arrayToDataTable();
    const chart = new google.visualization.BarChart(this.containerEl.nativeElement);

    chart.draw(data, this.chartOptions);
  }

  onSelectChart(e:ChartSelectionChangedEvent){
    this.initianSearchIndex+=1
    if(this.initianSearchIndex < ChartConfiguration.SearchCriterias.length){
      this.chartData$ =  this.taskservice.fetchChartsData(
        ChartConfiguration.SearchCriterias[this.initianSearchIndex],true)

        this.chartOptions = {...this.chartOptions,
          title:`Lead Summary of ${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
          hAxis: {
            title: `${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
            minValue: 0
          }}
    }
    
    
  }
}


/*

zonal data - name - zone name , value - number 

onselection of zone - show branches lead summary 


*/