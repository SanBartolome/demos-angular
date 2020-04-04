import { NgModule } from '@angular/core';
import { SanitizeTimePipe } from './sanitize-time.pipe';

@NgModule({
  imports: [],
  declarations: [SanitizeTimePipe],
  exports: [SanitizeTimePipe]
})
export class SanitizeTimePipeModule {}
