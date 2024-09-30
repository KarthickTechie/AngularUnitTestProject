import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
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
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dynamic-form",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./dynamic-form.component.html",
  styleUrl: "./dynamic-form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent {
  dynamicForm!: FormGroup;
  @Input({ required: true })
  dynamicFormFieldData!: DynamicFieldsData[];

  @Output() selectedField = new EventEmitter<SelectedFieldValueEmit>();
  @Output() onSubmitForm = new EventEmitter(); // retur

  constructor(
    private fb: FormBuilder,
    private mapDynamicData: MapDataToDynamicFieldService
  ) {
    
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
