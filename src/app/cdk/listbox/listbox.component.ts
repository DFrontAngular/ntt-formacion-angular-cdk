import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-listbox',
  standalone: true,
  imports: [
    CdkListbox,
    FormsModule,
    ReactiveFormsModule,
    CdkOption,
    JsonPipe,
    CurrencyPipe,
  ],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.scss',
})
export class ListboxComponent {
  languages = ['C++', 'Java', 'JavaScript', 'Python', 'TypeScript'];
  languageCtrl = new FormControl(['TypeScript'], Validators.required);
}
