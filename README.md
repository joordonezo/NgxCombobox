# NgxCombobox
This library was generated for you use.
## Demo
You can play around with this library with [playground](https://stackblitz.com/~/github.com/joordonezo/stackblitz-starters-5cvw1j){target="_blank"}.
## How to install

You can get **ngx-combobox** via **npm** by either adding it as a new _dependency_ to your `package.json` file and running `npm install`,
or running the following command:

```bash
npm install ngx-combobox
```
### Angular versions

The following list describes the compatibility with Angular:

| NgxCombobox | Angular|
| ---------------- | ------- |
| `1.x`            | `16.x`  |
| `2.x`            | `17.x`  |
## How to setup

Before actually being able to use the **ngx-combobox** library within our code, we have to first set it up within Angular, and also
bring the styles into our project.

### 1. Import the `ComboboxModule`

First of all, make **ngx-combobox** globally available to your Angular application by importing
`ComboboxModule` the your root Angular module. For example:

```typescript
import { ComboboxModule} from 'ngx-combobox';

@NgModule({
  imports: [ComboboxModule],
})
export class AppModule {}
```
### 2. Import the styles
You need to export the styles if you wish to do so from the `angular.json` using the style array like this.
```json
"styles": [
	"node_modules/ngx-combobox/src/assets/css/ngx-combobox.css",
	"src/styles.css"
],
```
Or customize the root styles like this.
```css
:root {
  --ngx-combobox-font-size: 14px;
  --ngx-combobox-font-family: Arial, sans-serif;
  --ngx-combobox-container-width: 100%;
  --ngx-combobox-container-height: 200px;
  --ngx-combobox-container-color: #333;
  --ngx-combobox-container-background-color: #fff;
  --ngx-combobox-container-border: 1px solid #ccc;
  --ngx-combobox-container-border-radius: 4px;
  --ngx-combobox-container-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  --ngx-combobox-container-hover-border-color: #000;
  --ngx-combobox-scrollbar-vertical-width: 12px;
  --ngx-combobox-scrollbar-horizontal-height: 12px;
  --ngx-combobox-scrollbar-thumb-background-color: #797979;
  --ngx-combobox-scrollbar-thumb-border-radius: 8px;
  --ngx-combobox-scrollbar-thumb-border: 2px solid #646464;
  --ngx-combobox-scrollbar-thumb-hover-background-color: #6e6e6e;
  --ngx-combobox-scrollbar-track-border-radius: 8px;
  --ngx-combobox-scrollbar-track-background-color: #f3f3f3;
  --ngx-combobox-scrollbar-track-hover-background-color: #dbdbdb;
  --ngx-combobox-arrow-color: 6px solid black;
  --ngx-combobox-option-hover-background-color: #96b7f5;
  --ngx-combobox-is-required-color: #ff0000;
  --ngx-combobox-is-required-background-color: #ffffff;
  --ngx-combobox-is-required-box-shadow: 2px 2px 0 rgb(116 93 93 / 10%);
  --ngx-combobox-is-required-padding: 4px;
  --ngx-combobox-is-required-font-weight: bold;
  --ngx-combobox-is-required-border-radius: 8px;
  --ngx-combobox-is-required-margin-top: 2px;
}
```
## Use of ngx-combobox
This is the way to use the component:
### 1. Use the ngx-combobox component.html
Use the `ngx-combobox` component in this way.
```html
<ngx-combobox
    [dataList]="dataList"
    [key]="'id'"
    [propertiesReturn]="propertiesReturn"
    (returnValue)="print($event)"
    [namesValue]="namesValue"
    placeholder="Buscar"
    [limit]="50"
    [required]="true"
    [requiredMessage]="'Campo requerido'"
    [containerClassList]="['cssClass1']"
    [inputClassList]="['cssClass2']"
    [selectClassList]="['cssClass3']"
    [optionClassList]="['cssClass4']"
    [spanClassList]="['cssClass5']"
    [defaultSelected]="2"
></ngx-combobox>
```
If you need use `ReactiveForms` then use this form
```html
<form [formGroup]="currentForm">
  <ngx-combobox
    [dataList]="dataList"
    [key]="'id'"
    [propertiesReturn]="propertiesReturn"
    (returnValue)="print($event)"
    [namesValue]="namesValue"
    placeholder="Buscar"
    [limit]="50"
    [required]="true"
    [requiredMessage]="'Campo requerido'"
    [containerClassList]="['cssClass1']"
    [inputClassList]="['cssClass2']"
    [selectClassList]="['cssClass3']"
    [optionClassList]="['cssClass4']"
    [spanClassList]="['cssClass5']"
    [defaultSelected]="2"
    formControlName="inputText"
  ></ngx-combobox>
</form>
```
### 2. Use the ngx-combobox component.ts
Use the `ngx-combobox` component in this way.
```typescript
export class AppComponent {
  public disabledInput: boolean = false;
  public currentForm: FormGroup = this.fb.group({
    inputText: [{ value: '', disabled: false }, []],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.currentForm.patchValue({
      inputText: 'No se aplicará si se encuentra <defaultSelected>',
    });
  }

  public returnProperties = {};

  public propertiesReturn = ['id', 'name', 'lastName'];

  public namesValue = ['name', 'lastName'];

  public print(valueOutput: any) {
    this.returnProperties = valueOutput;
    console.log(valueOutput);
  }

  public disabled() {
    if (this.disabledInput) {
      this.currentForm.disable();
    } else {
      this.currentForm.enable();
    }
    this.disabledInput = !this.disabledInput;
  }

  public dataList = [
    { id: 1, name: 'Luis', lastName: 'Perez', age: 25 },
    { id: 2, name: 'Maria', lastName: 'Gomez', age: 30 },
    { id: 3, name: 'Juan', lastName: 'Gonzalez', age: 35 },
  ];
}
```
## Some Configurations
All properties that can you modify and whitch are requeried or optional.
|         Property     | Required|   Type  |          Defaults values     |
| -------------------- | ------- | --------| ---------------------------  |
| `dataList`           | true    | array   |                              |
| `key`                | true    | string  |                              |
| `propertiesReturn`   | false   | array   | return `{...allProperties}`  |
| `returnValue`        | true    | Function|                              |
| `namesValue`         | true    | array   |                              |
| `placeholder`        | false   | string  | a void `''`                  |
| `limit   `           | false   | number  | `100`                        |
| `required`           | false   | boolean | `false`                      |
| `requiredMessage`    | false   | string  | a void `''`                  |
| `containerClassList` | false   | array   |                              |
| `inputClassList`     | false   | array   |                              |
| `containerClassList` | false   | array   |                              |
| `selectClassList`    | false   | array   |                              |
| `optionClassList`    | false   | array   |                              |
| `spanClassList`      | false   | array   |                              |
| `defaultSelected`    | false   | any     |matches the given key         |
| `formControlName`    | false   | string  |Excluide by `defaultSelected` |
