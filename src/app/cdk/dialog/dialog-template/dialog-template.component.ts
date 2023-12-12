import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogData } from '../interfaces/dialog-data.interface';

@Component({
  selector: 'app-dialog-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-template.component.html',
  styleUrl: './dialog-template.component.scss',
})
export class DialogTemplateComponent {
  public readonly data = inject<DialogData>(DIALOG_DATA);
  public readonly dialogRef = inject<DialogRef<string>>(DialogRef);
}
