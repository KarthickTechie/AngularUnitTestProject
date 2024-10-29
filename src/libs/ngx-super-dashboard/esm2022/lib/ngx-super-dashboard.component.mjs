import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class NgxSuperDashboardComponent {
    constructor(fb) {
        this.fb = fb;
        this.onSelect = new EventEmitter();
        this.onSubmit = new EventEmitter();
        console.log(`NgxSuperDashboardComponent : constructor`);
    }
    ngOnInit() {
        //create dynamic fields and add validation for each field
        console.log(`NgxSuperDashboardComponent : ngOnInit`);
        this.createForm();
    }
    createForm() {
        let formGrp = {};
        this.dynamicFormFieldData.forEach((field) => {
            formGrp = {
                ...formGrp,
                [field.formControlKey]: ['', Validators.compose([Validators.required])],
            };
        });
        this.dynamicForm = this.fb.group(formGrp);
    }
    // emit selected field value
    seletedValue(ev) {
        this.onSelect.emit({
            selectedValue: ev.target.value,
            fieldControlName: ev.target.id,
        });
    }
    onSubmitForm(formValues) {
        this.onSubmit.emit(formValues);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgxSuperDashboardComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: NgxSuperDashboardComponent, selector: "lib-ngx-super-dashboard", inputs: { dynamicFormFieldData: "dynamicFormFieldData", cardConfig: "cardConfig" }, outputs: { onSelect: "onSelect", onSubmit: "onSubmit" }, ngImport: i0, template: `
    <div class="fields-bar">
      <form
        [formGroup]="dynamicForm"
        (ngSubmit)="onSubmitForm(dynamicForm.value)"
      >
        <div class="grid-label-bar" *ngIf="dynamicForm.value.length != 0">
          <ng-container
            *ngFor="let field of dynamicFormFieldData; let i = index"
          >
            <div
              class="list"
              *ngIf="
                field.lovDataList && field.lovDataList.length > 0;
                else dynamicNonDropdown
              "
            >
              <div class="lable">{{ field.lable }}<span>-</span></div>

              <select
                formControlName="{{ field.formControlKey }}"
                id="{{ field.formControlKey }}"
                (change)="seletedValue($event)"
                placeholder="Select"
              >
                <option selected value="">Select</option>
                <option
                  [value]="item.value"
                  *ngFor="let item of field.lovDataList"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <ng-template #dynamicNonDropdown>
              <div class="list">
                <div class="lable">{{ field.lable }}<span>-</span></div>
                <input
                  type="{{ field.type }}"
                  class="picker"
                  formControlName="{{ field.formControlKey }}"
                  id="{{ field.formControlKey }}"
                  (change)="seletedValue($event)"
                  placeholder="Select"
                />
              </div>
            </ng-template>
          </ng-container>

          <div class="list lastList">
            <div class="lable">
              *Accounts in Actuals <br />
              *Ammount in Lakhs
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="grid-container">
      <div
        class="grid-area-countCards"
        *ngIf="cardConfig && cardConfig.length > 0"
      >
        <ng-container *ngFor="let item of cardConfig; let j = index">
          <div class="card card-border-left">
            <div class="card-header">
              <h3>{{ item.title }}</h3>
            </div>
            <div class="card-content">
              <p>{{ item.value }}</p>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `, isInline: true, styles: [".fields-bar{width:100vw;position:fixed;top:0;z-index:999;background-color:#111249;display:flex}.grid-label-bar{grid-template-columns:auto auto auto auto auto auto auto;gap:10px;padding:5px 14px;display:grid;color:#fff;font-size:13px}.grid-label-bar .list{display:flex;align-items:center}.lable span{margin-left:6px}input.picker[type=date]{position:relative}input.picker[type=date]::-webkit-calendar-picker-indicator{position:absolute;top:0;right:0;width:100%;height:100%;padding:0;color:transparent;background:transparent}select,input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;color:#fff;width:118px;padding:0 6px}select::-ms-expand{display:none}select:focus-visible{outline:none}input::placeholder{color:#fff;opacity:1}option{background-color:#fff;color:#000}.grid-container{height:auto!important;display:grid;grid-template-columns:auto auto auto auto auto;grid-template-rows:auto auto auto;gap:12px;background-color:#dddddd96;padding:7px;margin-top:3rem}.card{box-shadow:0 1px 5px #0003;margin:5px 0 12px;text-align:center;background-color:#fff;width:18vw;border-radius:8px}.card .card-header{padding:14px;border-bottom:1px solid #ddd;background:none;font-weight:600;font-size:15px}.card .card-content{padding:14px}.card h3{font-size:15px;margin:0}.card p{font-weight:600;font-size:15px;color:#853163}.grid-area-countCards{grid-area:1/1/2/2}.grid-area-chart{grid-area:1/2/3/4}.grid-area-chart .card{width:40vw;height:39.5vh;padding-bottom:8px}.grid-area-tableRecords{grid-area:1/4/3/-1}.grid-area-tableRecords .card{overflow:auto;width:100%;height:100%}.grid-area-tableRecords .card-content{padding:12px 10px}.grid-table{font-weight:400;font-size:12px;border-collapse:collapse;width:100%;height:auto;overflow:auto;border:1px solid #ddd}.grid-table tr,.grid-table th{border-bottom:1px solid #ddd;padding:8px}.grid-table .colspan tr:last-child{border:none}.colspan td{width:20%;padding:8px}.grid-table td:nth-child(1),.grid-table th:nth-child(1){border-right:1px solid #f2f2f2}.grid-table th{padding-top:12px;padding-bottom:12px;text-align:center}@media (max-width: 850px){.grid-container{gap:10px}}@media (max-width: 1089px){.grid-label-bar .lastList{display:none}}@media (max-width: 786px){.grid-label-bar{grid-template-columns:auto auto auto}}@media (max-width: 580px){.grid-label-bar{grid-template-columns:auto auto}.card-header{font-size:14px}.grid-container{grid-template-columns:auto;grid-template-rows:auto;gap:0px}.grid-area-countCards,.grid-area-chart,.grid-area-tableRecords{grid-area:auto}.grid-area-chart .card,.grid-area-countCards .card,.grid-area-tableRecords .card{width:100%;height:auto}.grid-area-countCards .card-content.chart{height:auto}}.card-border-left{border-left-color:var(--purple-color);border-left-width:var(--card-border-width);border-left-style:solid}.card-border-bottom{border-bottom-color:var(--purple-color);border-bottom-width:var(--card-border-width);border-bottom-style:solid}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgxSuperDashboardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-super-dashboard', template: `
    <div class="fields-bar">
      <form
        [formGroup]="dynamicForm"
        (ngSubmit)="onSubmitForm(dynamicForm.value)"
      >
        <div class="grid-label-bar" *ngIf="dynamicForm.value.length != 0">
          <ng-container
            *ngFor="let field of dynamicFormFieldData; let i = index"
          >
            <div
              class="list"
              *ngIf="
                field.lovDataList && field.lovDataList.length > 0;
                else dynamicNonDropdown
              "
            >
              <div class="lable">{{ field.lable }}<span>-</span></div>

              <select
                formControlName="{{ field.formControlKey }}"
                id="{{ field.formControlKey }}"
                (change)="seletedValue($event)"
                placeholder="Select"
              >
                <option selected value="">Select</option>
                <option
                  [value]="item.value"
                  *ngFor="let item of field.lovDataList"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <ng-template #dynamicNonDropdown>
              <div class="list">
                <div class="lable">{{ field.lable }}<span>-</span></div>
                <input
                  type="{{ field.type }}"
                  class="picker"
                  formControlName="{{ field.formControlKey }}"
                  id="{{ field.formControlKey }}"
                  (change)="seletedValue($event)"
                  placeholder="Select"
                />
              </div>
            </ng-template>
          </ng-container>

          <div class="list lastList">
            <div class="lable">
              *Accounts in Actuals <br />
              *Ammount in Lakhs
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="grid-container">
      <div
        class="grid-area-countCards"
        *ngIf="cardConfig && cardConfig.length > 0"
      >
        <ng-container *ngFor="let item of cardConfig; let j = index">
          <div class="card card-border-left">
            <div class="card-header">
              <h3>{{ item.title }}</h3>
            </div>
            <div class="card-content">
              <p>{{ item.value }}</p>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".fields-bar{width:100vw;position:fixed;top:0;z-index:999;background-color:#111249;display:flex}.grid-label-bar{grid-template-columns:auto auto auto auto auto auto auto;gap:10px;padding:5px 14px;display:grid;color:#fff;font-size:13px}.grid-label-bar .list{display:flex;align-items:center}.lable span{margin-left:6px}input.picker[type=date]{position:relative}input.picker[type=date]::-webkit-calendar-picker-indicator{position:absolute;top:0;right:0;width:100%;height:100%;padding:0;color:transparent;background:transparent}select,input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;color:#fff;width:118px;padding:0 6px}select::-ms-expand{display:none}select:focus-visible{outline:none}input::placeholder{color:#fff;opacity:1}option{background-color:#fff;color:#000}.grid-container{height:auto!important;display:grid;grid-template-columns:auto auto auto auto auto;grid-template-rows:auto auto auto;gap:12px;background-color:#dddddd96;padding:7px;margin-top:3rem}.card{box-shadow:0 1px 5px #0003;margin:5px 0 12px;text-align:center;background-color:#fff;width:18vw;border-radius:8px}.card .card-header{padding:14px;border-bottom:1px solid #ddd;background:none;font-weight:600;font-size:15px}.card .card-content{padding:14px}.card h3{font-size:15px;margin:0}.card p{font-weight:600;font-size:15px;color:#853163}.grid-area-countCards{grid-area:1/1/2/2}.grid-area-chart{grid-area:1/2/3/4}.grid-area-chart .card{width:40vw;height:39.5vh;padding-bottom:8px}.grid-area-tableRecords{grid-area:1/4/3/-1}.grid-area-tableRecords .card{overflow:auto;width:100%;height:100%}.grid-area-tableRecords .card-content{padding:12px 10px}.grid-table{font-weight:400;font-size:12px;border-collapse:collapse;width:100%;height:auto;overflow:auto;border:1px solid #ddd}.grid-table tr,.grid-table th{border-bottom:1px solid #ddd;padding:8px}.grid-table .colspan tr:last-child{border:none}.colspan td{width:20%;padding:8px}.grid-table td:nth-child(1),.grid-table th:nth-child(1){border-right:1px solid #f2f2f2}.grid-table th{padding-top:12px;padding-bottom:12px;text-align:center}@media (max-width: 850px){.grid-container{gap:10px}}@media (max-width: 1089px){.grid-label-bar .lastList{display:none}}@media (max-width: 786px){.grid-label-bar{grid-template-columns:auto auto auto}}@media (max-width: 580px){.grid-label-bar{grid-template-columns:auto auto}.card-header{font-size:14px}.grid-container{grid-template-columns:auto;grid-template-rows:auto;gap:0px}.grid-area-countCards,.grid-area-chart,.grid-area-tableRecords{grid-area:auto}.grid-area-chart .card,.grid-area-countCards .card,.grid-area-tableRecords .card{width:100%;height:auto}.grid-area-countCards .card-content.chart{height:auto}}.card-border-left{border-left-color:var(--purple-color);border-left-width:var(--card-border-width);border-left-style:solid}.card-border-bottom{border-bottom-color:var(--purple-color);border-bottom-width:var(--card-border-width);border-bottom-style:solid}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }], propDecorators: { dynamicFormFieldData: [{
                type: Input,
                args: [{ required: true }]
            }], cardConfig: [{
                type: Input,
                args: [{ required: true }]
            }], onSelect: [{
                type: Output
            }], onSubmit: [{
                type: Output
            }] } });
export const DynamicFieldsConfiguration = (fieldConfig) => {
    if (fieldConfig)
        return fieldConfig;
    else
        return testFieldData;
};
export const testFieldData = [
    { lable: 'Zone', formControlKey: 'zone', lovDataList: [] },
    { lable: 'Branch', formControlKey: 'branch', lovDataList: [] },
    { lable: 'Teams', formControlKey: 'teams', lovDataList: [] },
    { lable: 'Product', formControlKey: 'product', lovDataList: [] },
    { lable: 'Start Date', formControlKey: 'startDate', type: 'date' },
    { lable: 'End Date', formControlKey: 'endDate', type: 'date' },
];
// interfaces for grid cardsList:
export const DynamicCardsConfiguration = (cardConfig) => {
    if (cardConfig)
        return cardConfig;
    else
        return testCardData;
};
export const testCardData = [
    { title: 'Total Proposals', value: 700 },
    { title: 'On Process', value: 230 },
    { title: 'Sanctioned', value: 300 },
    { title: 'Rejected', value: 254 },
    { title: 'Opened prending for > 30 days', value: 143 },
    { title: 'Disbursed', value: 120 },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN1cGVyLWRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3VwZXItZGFzaGJvYXJkL3NyYy9saWIvbmd4LXN1cGVyLWRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQXdUcEUsTUFBTSxPQUFPLDBCQUEwQjtJQVVyQyxZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUh6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxRQUFRO1FBQ04seURBQXlEO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUM3RCxPQUFPLEdBQUc7Z0JBQ1IsR0FBRyxPQUFPO2dCQUNWLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN4RSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENB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LEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtDQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItbmd4LXN1cGVyLWRhc2hib2FyZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtYmFyXCI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJkeW5hbWljRm9ybVwiXHJcbiAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0Rm9ybShkeW5hbWljRm9ybS52YWx1ZSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtbGFiZWwtYmFyXCIgKm5nSWY9XCJkeW5hbWljRm9ybS52YWx1ZS5sZW5ndGggIT0gMFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZHluYW1pY0Zvcm1GaWVsZERhdGE7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0XCJcclxuICAgICAgICAgICAgICAqbmdJZj1cIlxyXG4gICAgICAgICAgICAgICAgZmllbGQubG92RGF0YUxpc3QgJiYgZmllbGQubG92RGF0YUxpc3QubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgIGVsc2UgZHluYW1pY05vbkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPnt7IGZpZWxkLmxhYmxlIH19PHNwYW4+LTwvc3Bhbj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3sgZmllbGQuZm9ybUNvbnRyb2xLZXkgfX1cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ7eyBmaWVsZC5mb3JtQ29udHJvbEtleSB9fVwiXHJcbiAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInNlbGV0ZWRWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+U2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQubG92RGF0YUxpc3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7eyBpdGVtLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZHluYW1pY05vbkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGVcIj57eyBmaWVsZC5sYWJsZSB9fTxzcGFuPi08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInt7IGZpZWxkLnR5cGUgfX1cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInBpY2tlclwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7IGZpZWxkLmZvcm1Db250cm9sS2V5IH19XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ7eyBmaWVsZC5mb3JtQ29udHJvbEtleSB9fVwiXHJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2VsZXRlZFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QgbGFzdExpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgKkFjY291bnRzIGluIEFjdHVhbHMgPGJyIC8+XHJcbiAgICAgICAgICAgICAgKkFtbW91bnQgaW4gTGFraHNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImdyaWQtYXJlYS1jb3VudENhcmRzXCJcclxuICAgICAgICAqbmdJZj1cImNhcmRDb25maWcgJiYgY2FyZENvbmZpZy5sZW5ndGggPiAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY2FyZENvbmZpZzsgbGV0IGogPSBpbmRleFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib3JkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+e3sgaXRlbS50aXRsZSB9fTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHA+e3sgaXRlbS52YWx1ZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuZmllbGRzLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTEyNDk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgICAuZ3JpZC1sYWJlbC1iYXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ncmlkLWxhYmVsLWJhciAubGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGFibGUgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQucGlja2VyW3R5cGU9J2RhdGUnXSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dC5waWNrZXJbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3QsXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDExOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgZGVmYXVsdCBhcnJvdyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBhbmQgSW50ZXJuZXQgRXhwbG9yZXIgMTEgKi9cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3Q6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDk2O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMTJweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAxOHZ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZCBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogIzg1MzE2MztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzIHtcclxuICAgICAgICBncmlkLWFyZWE6IDEvMS8yLzI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ncmlkLWFyZWEtY2hhcnQge1xyXG4gICAgICAgIGdyaWQtYXJlYTogMS8yLzMvNDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmdyaWQtYXJlYS1jaGFydCAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAzOS41dmg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMge1xyXG4gICAgICAgIGdyaWQtYXJlYTogMS80LzMvLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzIC5jYXJkIHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmdyaWQtYXJlYS10YWJsZVJlY29yZHMgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZ3JpZC10YWJsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmdyaWQtdGFibGUgdHIsXHJcbiAgICAgIC5ncmlkLXRhYmxlIHRoIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmdyaWQtdGFibGUgLmNvbHNwYW4gdHI6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb2xzcGFuIHRkIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmdyaWQtdGFibGUgdGQ6bnRoLWNoaWxkKDEpLFxyXG4gICAgICAuZ3JpZC10YWJsZSB0aDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMmYyZjI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ncmlkLXRhYmxlIHRoIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTA4OXB4KSB7XHJcbiAgICAgICAgLmdyaWQtbGFiZWwtYmFyIC5sYXN0TGlzdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc4NnB4KSB7XHJcbiAgICAgICAgLmdyaWQtbGFiZWwtYmFyIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICAgIC5ncmlkLWxhYmVsLWJhciB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICAgIGdhcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMsXHJcbiAgICAgICAgLmdyaWQtYXJlYS1jaGFydCxcclxuICAgICAgICAuZ3JpZC1hcmVhLXRhYmxlUmVjb3JkcyB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmlkLWFyZWEtY2hhcnQgLmNhcmQsXHJcbiAgICAgICAgLmdyaWQtYXJlYS1jb3VudENhcmRzIC5jYXJkLFxyXG4gICAgICAgIC5ncmlkLWFyZWEtdGFibGVSZWNvcmRzIC5jYXJkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JpZC1hcmVhLWNvdW50Q2FyZHMgLmNhcmQtY29udGVudC5jaGFydCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLWJvcmRlci1sZWZ0IHtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogdmFyKC0tY2FyZC1ib3JkZXItd2lkdGgpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1ib3JkZXItYm90dG9tIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IHZhcigtLWNhcmQtYm9yZGVyLXdpZHRoKTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4U3VwZXJEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGR5bmFtaWNGb3JtITogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pXHJcbiAgZHluYW1pY0Zvcm1GaWVsZERhdGEhOiBEeW5hbWljRmllbGRzRGF0YVtdO1xyXG5cclxuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KSBjYXJkQ29uZmlnITogRHluYW1pY0NhcmRzRGF0YVtdO1xyXG5cclxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdGVkRmllbGRWYWx1ZUVtaXQ+KCk7XHJcbiAgQE91dHB1dCgpIG9uU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xyXG4gICAgY29uc29sZS5sb2coYE5neFN1cGVyRGFzaGJvYXJkQ29tcG9uZW50IDogY29uc3RydWN0b3JgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy9jcmVhdGUgZHluYW1pYyBmaWVsZHMgYW5kIGFkZCB2YWxpZGF0aW9uIGZvciBlYWNoIGZpZWxkXHJcbiAgICBjb25zb2xlLmxvZyhgTmd4U3VwZXJEYXNoYm9hcmRDb21wb25lbnQgOiBuZ09uSW5pdGApO1xyXG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgbGV0IGZvcm1HcnAgPSB7fTtcclxuICAgIHRoaXMuZHluYW1pY0Zvcm1GaWVsZERhdGEuZm9yRWFjaCgoZmllbGQ6IER5bmFtaWNGaWVsZHNEYXRhKSA9PiB7XHJcbiAgICAgIGZvcm1HcnAgPSB7XHJcbiAgICAgICAgLi4uZm9ybUdycCxcclxuICAgICAgICBbZmllbGQuZm9ybUNvbnRyb2xLZXldOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5keW5hbWljRm9ybSA9IHRoaXMuZmIuZ3JvdXAoZm9ybUdycCk7XHJcbiAgfVxyXG5cclxuICAvLyBlbWl0IHNlbGVjdGVkIGZpZWxkIHZhbHVlXHJcbiAgc2VsZXRlZFZhbHVlKGV2OiBhbnkpIHtcclxuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7XHJcbiAgICAgIHNlbGVjdGVkVmFsdWU6IGV2LnRhcmdldC52YWx1ZSxcclxuICAgICAgZmllbGRDb250cm9sTmFtZTogZXYudGFyZ2V0LmlkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdEZvcm0oZm9ybVZhbHVlczogRm9ybUdyb3VwKSB7XHJcbiAgICB0aGlzLm9uU3VibWl0LmVtaXQoZm9ybVZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRHluYW1pY0ZpZWxkc0NvbmZpZ3VyYXRpb24gPSAoXHJcbiAgZmllbGRDb25maWc6IER5bmFtaWNGaWVsZHNEYXRhW11cclxuKTogRHluYW1pY0ZpZWxkc0RhdGFbXSA9PiB7XHJcbiAgaWYgKGZpZWxkQ29uZmlnKSByZXR1cm4gZmllbGRDb25maWc7XHJcbiAgZWxzZSByZXR1cm4gdGVzdEZpZWxkRGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXN0RmllbGREYXRhOiBEeW5hbWljRmllbGRzRGF0YVtdID0gW1xyXG4gIHsgbGFibGU6ICdab25lJywgZm9ybUNvbnRyb2xLZXk6ICd6b25lJywgbG92RGF0YUxpc3Q6IFtdIH0sXHJcbiAgeyBsYWJsZTogJ0JyYW5jaCcsIGZvcm1Db250cm9sS2V5OiAnYnJhbmNoJywgbG92RGF0YUxpc3Q6IFtdIH0sXHJcbiAgeyBsYWJsZTogJ1RlYW1zJywgZm9ybUNvbnRyb2xLZXk6ICd0ZWFtcycsIGxvdkRhdGFMaXN0OiBbXSB9LFxyXG4gIHsgbGFibGU6ICdQcm9kdWN0JywgZm9ybUNvbnRyb2xLZXk6ICdwcm9kdWN0JywgbG92RGF0YUxpc3Q6IFtdIH0sXHJcbiAgeyBsYWJsZTogJ1N0YXJ0IERhdGUnLCBmb3JtQ29udHJvbEtleTogJ3N0YXJ0RGF0ZScsIHR5cGU6ICdkYXRlJyB9LFxyXG4gIHsgbGFibGU6ICdFbmQgRGF0ZScsIGZvcm1Db250cm9sS2V5OiAnZW5kRGF0ZScsIHR5cGU6ICdkYXRlJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBMT1ZEYXRhIHtcclxuICBuYW1lOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRmllbGRzRGF0YSB7XHJcbiAgbGFibGU6IHN0cmluZztcclxuICBmb3JtQ29udHJvbEtleTogc3RyaW5nO1xyXG4gIGxvdkRhdGFMaXN0PzogQXBwTE9WRGF0YVtdO1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGVkRmllbGRWYWx1ZUVtaXQge1xyXG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBmaWVsZENvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0RGF0YU9wdGlvbiB7XHJcbiAgZmV0Y2hMb3ZEYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBhbnkgfCBudWxsPltdO1xyXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgbmFtZTI/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIGludGVyZmFjZXMgZm9yIGdyaWQgY2FyZHNMaXN0OlxyXG5leHBvcnQgY29uc3QgRHluYW1pY0NhcmRzQ29uZmlndXJhdGlvbiA9IChcclxuICBjYXJkQ29uZmlnOiBEeW5hbWljQ2FyZHNEYXRhW11cclxuKTogRHluYW1pY0NhcmRzRGF0YVtdID0+IHtcclxuICBpZiAoY2FyZENvbmZpZykgcmV0dXJuIGNhcmRDb25maWc7XHJcbiAgZWxzZSByZXR1cm4gdGVzdENhcmREYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlc3RDYXJkRGF0YTogRHluYW1pY0NhcmRzRGF0YVtdID0gW1xyXG4gIHsgdGl0bGU6ICdUb3RhbCBQcm9wb3NhbHMnLCB2YWx1ZTogNzAwIH0sXHJcbiAgeyB0aXRsZTogJ09uIFByb2Nlc3MnLCB2YWx1ZTogMjMwIH0sXHJcbiAgeyB0aXRsZTogJ1NhbmN0aW9uZWQnLCB2YWx1ZTogMzAwIH0sXHJcbiAgeyB0aXRsZTogJ1JlamVjdGVkJywgdmFsdWU6IDI1NCB9LFxyXG4gIHsgdGl0bGU6ICdPcGVuZWQgcHJlbmRpbmcgZm9yID4gMzAgZGF5cycsIHZhbHVlOiAxNDMgfSxcclxuICB7IHRpdGxlOiAnRGlzYnVyc2VkJywgdmFsdWU6IDEyMCB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljQ2FyZHNEYXRhIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG4iXX0=