import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@flipkart/design-system';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, ButtonComponent],
  template: `<ds-button>
  Add to Cart
</ds-button>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
