// librerie
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * crea un nuovo componente
   * @param {TranslateService} translateService gestore delle traduzioni
   * @param {CookieService} cookieService gestore del cookie
   */
  constructor(
    private translateService: TranslateService,
    private cookieService: CookieService
  ) {
    // inizializza il service di traduzione
    this.translateService.addLangs(['en', 'it']);
    this.translateService.setDefaultLang('it');
    this.translateService.use(this.translateService.getBrowserLang());
    // imposta il cookie con la lingua
    this.cookieService.set('abt-lang', this.translateService.getBrowserLang());
  }// constructor

} // AppComponent
