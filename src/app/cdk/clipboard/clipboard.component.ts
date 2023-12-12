import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [ClipboardModule, FormsModule],
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.scss',
})
export class ClipboardComponent {
  private readonly clipboard = inject(Clipboard);

  value =
    'Contenido a copiar para el ejemplo de la directiva cdkCopyToClipboard.';

  valueService = 'Contenido a copiar para el ejemplo del servicio copy.';

  copyClipboard(text: string) {
    this.clipboard.copy(text);
  }
}
