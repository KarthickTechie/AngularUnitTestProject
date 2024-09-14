import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {
  SelectedFieldValueEmit,
  SetDataOption,
} from "../../Utils/DynamicFieldsConfiguration";

@Injectable({
  providedIn: "root",
})
export class MapDataToDynamicFieldService {
  public dataBindToField = new Subject<SelectedFieldValueEmit[]>();

  set _dataBindToField(val: SelectedFieldValueEmit[]) {
    this.dataBindToField.next(val);
  }

  constructor() {}

  // set the array object structure same for all dynamic field lov data
  setLovPropertyKeys(setOptions: SetDataOption) {
    return new Promise<any>((resolve, reject) => {
      try {
        setOptions.fetchLovData.forEach(
          (
            item: Record<string, string | number | boolean | null | any>,
            i: number
          ) => {
            setOptions.fetchLovData[i] = {
              ...item,
              optCode: item[`${setOptions.optCode}`],
              optDesc: item[`${setOptions.optDesc}`],
            };
            if (i == setOptions.fetchLovData.length - 1) {
              return resolve(setOptions.fetchLovData);
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }
}
