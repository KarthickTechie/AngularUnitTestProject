import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NgxSuperDashboardComponent implements OnInit {
    private fb;
    dynamicForm: FormGroup;
    dynamicFormFieldData: DynamicFieldsData[];
    cardConfig: DynamicCardsData[];
    onSelect: EventEmitter<SelectedFieldValueEmit>;
    onSubmit: EventEmitter<any>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    createForm(): void;
    seletedValue(ev: any): void;
    onSubmitForm(formValues: FormGroup): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxSuperDashboardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxSuperDashboardComponent, "lib-ngx-super-dashboard", never, { "dynamicFormFieldData": { "alias": "dynamicFormFieldData"; "required": true; }; "cardConfig": { "alias": "cardConfig"; "required": true; }; }, { "onSelect": "onSelect"; "onSubmit": "onSubmit"; }, never, never, false, never>;
}
export declare const DynamicFieldsConfiguration: (fieldConfig: DynamicFieldsData[]) => DynamicFieldsData[];
export declare const testFieldData: DynamicFieldsData[];
export interface AppLOVData {
    name: string | number;
    value: string | number;
}
export interface DynamicFieldsData {
    lable: string;
    formControlKey: string;
    lovDataList?: AppLOVData[];
    type?: string;
    className?: string;
}
export interface SelectedFieldValueEmit {
    selectedValue: string | number;
    fieldControlName: string;
}
export interface SetDataOption {
    fetchLovData: Record<string, string | number | any | null>[];
    value?: string | number;
    name?: string;
    name2?: string;
}
export declare const DynamicCardsConfiguration: (cardConfig: DynamicCardsData[]) => DynamicCardsData[];
export declare const testCardData: DynamicCardsData[];
export interface DynamicCardsData {
    title: string;
    value: number | string | null;
    className?: string;
}
