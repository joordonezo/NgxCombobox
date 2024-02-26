import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComboboxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ComboboxComponent]
})
export class ComboboxModule {}
