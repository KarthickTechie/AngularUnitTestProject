import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  DynamicFieldsData,
  SelectedFieldValueEmit,
} from "../../Utils/DynamicFieldsConfiguration";
import { MapDataToDynamicFieldService } from "../../services/dynamicForm/map-data-to-dynamic-field.service";

@Component({
  selector: "app-create-dynamic-form",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./create-dynamic-form.component.html",
  styleUrl: "./create-dynamic-form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDynamicFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  @Input()
  dynamicFormFieldData!: DynamicFieldsData[];

  @Output() selectedField = new EventEmitter<SelectedFieldValueEmit>();
  @Output() onSubmitForm = new EventEmitter(); // retur

  constructor(
    private fb: FormBuilder,
    private mapDynamicData: MapDataToDynamicFieldService
  ) {
    // bind data to form control field by using subject
    // this.mapDynamicData.dataBindToField.subscribe(
    //   (data: SelectedFieldValueEmit[]) => {
    //     if (data) {
    //       this.dynamicForm
    //         .get(data[0].fieldControlName)
    //         ?.setValue(data[0].selectedValue);
    //     }
    //   }
    // );
  }

  ngOnInit() {
    //create dynamic fields and add validation for each field
    this.createForm();
  }

  createForm() {
    let formGrp = {};
    this.dynamicFormFieldData.forEach((field: DynamicFieldsData) => {
      formGrp = {
        ...formGrp,
        [field.formControlKey]: ["", Validators.compose([Validators.required])],
      };
    });
    this.dynamicForm = this.fb.group(formGrp);
  }

  // emit selected field value
  seletedValue(ev: any) {
    this.selectedField.emit({
      selectedValue: ev.target.value,
      fieldControlName: ev.target.id,
    });
  }

  onSubmit(formValues: FormGroup) {
    this.onSubmitForm.emit(formValues);
  }
}
