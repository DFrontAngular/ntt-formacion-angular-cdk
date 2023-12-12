import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [FormsModule, DialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  animal: string | undefined;
  name = '';

  private readonly dialog = inject(Dialog);

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(DialogTemplateComponent, {
      width: '350px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
