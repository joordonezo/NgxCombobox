import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
})
export class ComboboxComponent implements OnInit {
  public currentForm: FormGroup = this.fb.group({
    input: ['', []],
  });

  public isVisibleList: boolean = false;
  public dataListFiltered: any[] = [];
  @Input() public dataList!: any[];
  @Input() public key!: string;
  @Input() public namesValue!: string[];
  @Input() public propertiesReturn?: string[];
  @Input() public required?: boolean = false;
  @Input() public limit?: number = 100;
  @Input() public placeholder?: string = '';
  @Input() public requiredMessage?: string = '';
  @Input() public containerClassList?: string[];
  @Input() public inputClassList?: string[];
  @Input() public selectClassList?: string[];
  @Input() public optionClassList?: string[];
  @Input() public spanClassList?: string[];
  @Output() public returnValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.containerClassList = [
      'ngx-combobox-input-container',
      ...(this.containerClassList || []),
    ];
    this.inputClassList = [
      'form-control',
      'ngx-combobox-input',
      ...(this.inputClassList || []),
    ];
    this.selectClassList = [
      'form-control',
      'ngx-combobox',
      'ngx-combobox-container-select',
      ...(this.selectClassList || []),
    ];
    this.optionClassList = [
      'ngx-combobox-option',
      ...(this.optionClassList || []),
    ];
    this.spanClassList = ['is-required', ...(this.spanClassList || [])];

    if (this.required) {
      this.currentForm.get('input')?.setValidators(Validators.required);
      this.currentForm.get('input')?.updateValueAndValidity();
    }
  }

  clickInput() {
    if (this.dataList.length > 0) {
      this.isVisibleList = !this.isVisibleList;
      this.dataListFiltered = this.dataList.slice(0, this.limit);
    }
  }

  setOptionSelected(event: any): void {
    let htmlElement = event.target;

    this.currentForm.patchValue({
      input: htmlElement.textContent,
    });

    let element = this.dataList.find(
      (element: any) => element[this.key] == htmlElement.value
    ) as any;

    this.currentForm.patchValue({
      input: this.buildValue(element),
    });

    this.isVisibleList = false;
    if (this.propertiesReturn && this.propertiesReturn.length > 0) {
      let valueReturn: any = {};
      this.propertiesReturn.forEach((property: string) => {
        valueReturn[property] = element[property];
      });

      this.returnValue.emit(valueReturn);
    } else {
      this.returnValue.emit(element);
    }
  }

  filterList(event: any): void {
    let valueInput = event.target.value;
    if (valueInput.length > 0 && this.dataList) {
      this.dataListFiltered = this.dataList.filter((element: any) =>
        this.buildValue(element)
          .toLowerCase()
          .includes(valueInput.toLowerCase())
      );
      if (this.dataListFiltered.length > 0) {
        this.isVisibleList = true;
      }
    } else {
      this.isVisibleList = false;
    }
  }

  public buildValue(element: any): String {
    let value = '';
    if (this.namesValue) {
      this.namesValue.forEach((property: any, i) => {
        value +=
          this.namesValue.length - 1 == i
            ? element[property]
            : element[property] + ' ';
      });
    } else {
      value = element[this.key];
    }
    return value;
  }
}
