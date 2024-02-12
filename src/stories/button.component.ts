import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button type="button" class="button">{{ label }}</button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent
{
  @Input()
  label !: string;

  @Input()
  primary !: boolean;
}
