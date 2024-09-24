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
