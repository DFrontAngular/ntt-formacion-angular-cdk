import {
  CdkAccordion,
  CdkAccordionItem,
  CdkAccordionModule,
} from '@angular/cdk/accordion';
import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CdkAccordionModule, RouterOutlet],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  @ViewChild('accordion') accordion!: CdkAccordion;
  @ViewChildren(CdkAccordionItem, { read: ElementRef })
  accordionItems!: QueryList<ElementRef>;

  openAll() {
    this.accordion.openAll();
  }

  closeAll() {
    this.accordion.closeAll();
  }

  navigate(event: KeyboardEvent, index: number) {
    const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];

    if (keys.includes(event.key)) {
      event.preventDefault();
      const direction = keys.indexOf(event.key) < 2 ? 1 : -1;
      const newIndex = index + direction;

      if (newIndex >= 0 && newIndex < this.items.length) {
        this.accordionItems.toArray()[newIndex].nativeElement.focus();
      }
    }
  }
}
