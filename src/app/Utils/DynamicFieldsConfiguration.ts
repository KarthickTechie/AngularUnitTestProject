export const DynamicFieldsConfiguration: DynamicFieldsData[] = [
  { lable: "Zonal", formControlKey: "zonal", lovDataList: [] },
  { lable: "Teams", formControlKey: "teams", lovDataList: [] },
  { lable: "Team Members", formControlKey: "teamMembers", lovDataList: [] },
  { lable: "Branch", formControlKey: "branch", lovDataList: [] },
];

export interface AppLOVData {
  optCode: string | number;
  optDesc: string;
}

export interface DynamicFieldsData {
  lable: string;
  formControlKey: string;
  lovDataList: AppLOVData[];
}

export interface SelectedFieldValueEmit {
  selectedValue: string | number;
  fieldControlName: string;
}

export interface SetDataOption {
  fetchLovData: Record<string, string | number | any | null>[];
  optCode?: string | number;
  optDesc?: string;
  optDesc2?: string;
}
