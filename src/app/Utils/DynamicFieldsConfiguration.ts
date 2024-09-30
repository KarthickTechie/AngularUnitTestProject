export const DynamicFieldsConfiguration  = (fieldConfig:DynamicFieldsData[]):DynamicFieldsData[] => {
      if(fieldConfig)
        return fieldConfig
      else 
        return testFieldData
}


export const testFieldData:DynamicFieldsData[] = [
  { lable: "Zone", formControlKey: "zone", lovDataList: [] },
  { lable: "Branch", formControlKey: "branch", lovDataList: [] },
  { lable: "Teams", formControlKey: "teams", lovDataList: [] },
  { lable: "Product", formControlKey: "product", lovDataList: [] },
  { lable: "Start Date", formControlKey: "startDate", type: "date" },
  { lable: "End Date", formControlKey: "endDate", type: "date" },
];

export interface AppLOVData {
  name: string | number;
  value: string | number;
}

export interface DynamicFieldsData {
  lable: string;
  formControlKey: string;
  lovDataList?: AppLOVData[];
  type?: string;
}

export interface SelectedFieldValueEmit {
  selectedValue: string | number;
  fieldControlName: string;
}

export interface SetDataOption {
  fetchLovData: Record<string, string | number | any | null>[];
  value?: string | number;
  name?: string;
  optDesc2?: string;
}
