import { ChartType } from "angular-google-charts";
import { DashardCardConfig, GridTableConfigData } from "ngx-super-dashboard";

export const ChartConfiguration: ChartConfig = {
  Colors: ["#b87333", "silver", "gold", "#e5e4e2", "yellow", "#434343", "#777"],

  SearchCriterias: ["zone", "branch", "teams", "product"],
};

export interface ChartConfig {
  Colors?: string[];
  SearchCriterias: string[];
}

export interface ChartEventEmitOnSelect {
  ev: any;
  chartType: string;
}

export interface ChartEventValue {
  row: number | null;
  column: number | null;
}


export const testChartsData: DashardCardConfig[] = [
  {
  type: ChartType.ComboChart,
  cardTitle: 'Monthly Wise',
  chartOptionData: {
  myColumns: ['Year', 'Retail', 'Agri', 'MSME', 'Gold', 'Corp'],
   
        chartOptions: {
          title: `Monthly Wise`,
          chartArea: { width: '50%' },
          hAxis: {
            title: `Modules`,
            minValue: 0,
          },
          vAxis: {
            title: 'No. Of Amount',
          },
          seriesType: 'bars',
          // series: { 4: { type: "line" } },
        },
      },
      chartData: [
        ['2023/05', 50, 33, 24.5, 33, 22],
        ['2024/05', 23, 41, 22.5, 22, 2],
        ['2021/05', 44, 82, 13, 43, 12],
        ['2023/05', 19, 33, 23, 21, 89],
        ['2022/05', 30, 20, 12, 34, 22],
      ],
      className: '',
   
  },
  {
  type: ChartType.PieChart,
  cardTitle: 'Total Sanctioned',
  chartOptionData: {
  myColumns: [
  ['Retail', 'Agri', 'MSME', 'GOLD', 'CORP'],
  'Leads Count',
  { role: 'style' },
  ],
  chartOptions: {
  title: `Sanctioned Amount`,
  chartArea: { width: '50%' },
  slices: {
  0: { color: '#622248' },
  1: { color: '#109618' },
  2: { color: '#3366cc' },
  3: { color: 'red' },
  4: { color: '#ff9900' },
  },
  },
  },
  chartData: [
  ['Retail', 3445, 'red'],
  ['Agri', 3445, 'red'],
  ['MSME', 3445, 'red'],
  ['Gold', 3445, 'red'],
  ],
  className: '',
  },
  ];

  export const testCardTable = {
    cardTitle: 'Top 5 Branches',
    tableColumnHeadings: ['', 'Retail', 'Agri', 'MSME', 'Gold'],
    tableDataKey: ['orgName', 'retail', 'agri', 'msme', 'gold'],
    tableData: [
    {
    orgName: 'Chennai',
    retail: '849',
    agri: '599',
    msme: '500',
    gold: '200',
    },
    {
    orgName: 'Delhi',
    retail: '200',
    agri: '300',
    msme: '400',
    gold: '150',
    },
    {
    orgName: 'Tnagar',
    retail: '849',
    agri: '480',
    msme: '250',
    gold: '600',
    },
    {
    orgName: 'Poonamale',
    retail: '940',
    agri: '234',
    msme: '700',
    gold: '400',
    },
    ],
    };

    export const testGridTable: GridTableConfigData = {
      title: 'Scheme Wise',
      tableHeading: [
      'Loan Type',
      'Scheme',
      'No of Acc #',
      'Limit in (Lakhs)',
      'OS amt in(Lakhs)',
      ],
      tableData: [
      {
      parentName: 'Chennai',
      childData: [
      {
      tpmSeqId: 62685,
      tpmCode: '2',
      tpmModifiedDate: '2024-04-24T07:49:20.879+0000',
      tpmPrdCode: 'Car Loan',
      schemeType: 'Car Dealer',
      noOfAcc: 'S14',
      limit: '344',
      Sanctioned: '20302',
      },
      ],
      },
      {
      parentName: 'Hyderabad',
      childData: [
      {
      tpmSeqId: 62686,
      tpmCode: '2',
      tpmModifiedDate: '2024-04-24T07:49:20.880+0000',
      tpmPrdCode: 'Cash Loan',
      schemeType: 'Property Loan',
      noOfAcc: 'S34',
      limit: '676',
      Sanctioned: '23',
      },
      ],
      },
      ],
      tableDataKey: ['schemeType', 'noOfAcc', 'limit', 'Sanctioned'],
      };
       