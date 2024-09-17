export const DynamicFieldsConfiguration: DynamicFieldsData[] = [
  { lable: "Zone", formControlKey: "zone", lovDataList: [] },
  { lable: "Branch", formControlKey: "branch", lovDataList: [] },
  { lable: "Teams", formControlKey: "teams", lovDataList: [] },
  { lable: "Team Members", formControlKey: "teamMembers", lovDataList: [] },
 
];

export interface AppLOVData {
  name: string | number;
  value: string | number;
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
