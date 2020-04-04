import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PasswordRevealElmDirective,
  PasswordRevealDirective
} from './password-reveal.directive';

@NgModule({
  imports: [CommonModule],
  exports: [PasswordRevealElmDirective, PasswordRevealDirective],
  declarations: [PasswordRevealElmDirective, PasswordRevealDirective]
})
export class PasswordRevealDirectiveModule {}
