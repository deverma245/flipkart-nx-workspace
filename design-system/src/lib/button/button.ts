import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ds-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'danger'>('primary');
  readonly disabled = input(false);
}
