import { ScrollingModule } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './scrolling.component.html',
  styleUrl: './scrolling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollingComponent {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
}
