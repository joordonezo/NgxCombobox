# NgxCombobox
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
## Demo
You can play around with this library with [playground](https://stackblitzstarters5cvw1j-jcqj-7vsvwb6m--4200--a9c8a5a3.local-credentialless.webcontainer.io).
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
## How to setup

Before actually being able to use the **ngx-combobox** library within our code, we have to first set it up within Angular, and also
bring the styles into our project.

### 1. Import the `ComboboxModule`

First of all, make **ngx-combobox** globally available to your Angular application by importing
`ComboboxModule` the your root Angular module. For example:

```typescript
import { ComboboxModule} from '@joordonezo/ngx-combobox';

@NgModule({
  imports: [ComboboxModule],
})
export class AppModule {}
```
### 2. Import the styles
You need to export the styles if you wish to do so from the `angular.json` using the style array like this.
```json
"styles": [
	"node_modules/@joordonezo/ngx-combobox/src/assets/css/ngx-combobox.css",
	"src/styles.css"
],
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
></ngx-combobox>
```
### 2. Use the ngx-combobox component.ts
Use the `ngx-combobox` component in this way.
```typescript
export class AppComponent {
	public dataList = [
		{ id: 1, name: 'Luis', lastName: 'Perez', age: 25 },
		{ id: 2, name: 'Maria', lastName: 'Gomez', age: 30 },
		{ id: 3, name: 'Juan', lastName: 'Gonzalez', age: 35 }
	];
	public  propertiesReturn = ['id', 'name', 'lastName'];
	public  namesValue = ['name', 'lastName'];
	public  print(event: any) {
		console.log(event);
	}
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


