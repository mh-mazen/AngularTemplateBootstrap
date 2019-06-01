import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DownloadComponent } from './download/download.component';
import { FeaturesComponent } from './features/features.component';
import { CtaComponent } from './cta/cta.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DownloadComponent,
    FeaturesComponent,
    CtaComponent,
    ContactComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    AlertModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
