// librerie
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { CookieService } from 'ngx-cookie-service';

// moduli applicativi
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { TopbarComponent } from './common/topbar/topbar.component';

/**
 * factory per il caricamento dei file per la traduzione
 * @param http service http
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
} // HttpLoaderFactory

// gestistra il locale per la lingua italiana
registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

  ],
  providers: [
    CookieService,
    { provide: LOCALE_ID, useValue: 'it-IT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } // AppModule
