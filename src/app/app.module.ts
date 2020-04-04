import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeButtonComponentModule } from './shared/components/awesome-button/awesome-button.module';
import { PasswordRevealDirectiveModule } from './shared/directives/password-reveal/password-reveal.module';
import { SanitizeTimePipeModule } from './shared/pipes/sanitize-time/sanitize-time.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AwesomeButtonComponentModule,
    PasswordRevealDirectiveModule,
    SanitizeTimePipeModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
