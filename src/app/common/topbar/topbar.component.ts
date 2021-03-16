// librerie
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faBars, faBell, faCog, faDonate, faEnvelope, faExclamationTriangle, faFileAlt, faList, faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

// moduli applicativi
import { TogglerService } from '../@core/toggler.service';
import { APP_CONFIG } from 'src/app/@config/app.config';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  // inizializza le icone
  faBars = faBars;
  faBell = faBell;
  faCog = faCog;
  faDonate = faDonate;
  faEnvelope = faEnvelope;
  faExclamationTriangle = faExclamationTriangle;
  faFileAlt = faFileAlt;
  faList = faList;
  faSearch = faSearch;
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;

  // proprietà private
  private _shownMenu: string = '';

  // proprietà pubbliche
  appConfig = APP_CONFIG;

  /**
   * crea un nuovo componente
   * @param {NgbModal} modalService gestore delle finestre modali
   * @param {TogglerService} togglerService gestore della visibilità dei componenti
   */
  constructor(
    private modalService: NgbModal,
    private togglerService: TogglerService,
  ) { } // constructor

  /**
   * inizializza il componente
   */
  ngOnInit(): void {
  } // ngOnInit

  /**
   * visualizza il menu specificato
   * @param {string} menu menu da visualizzare
   */
  onShowMenu(menu: string) {
    if (this.isMenuShown(menu)) {
      this._shownMenu = '';
    } else {
      this._shownMenu = menu;
    }
  } // showMenu

  /**
   * controlla se il menu specificato è quello da visualizzare
   * @param {string} menu menu da controllare
   * @returns {boolean} true se il menu è visibile, false altrimenti
   */
  isMenuShown(menu: string): boolean {
    return this._shownMenu == menu;
  } // isMenuShowed

  /**
   * visualizza il popup di conferma del logout
   * @param {any} content contenuto da visualizzare nel popup
   */
  onShowLogoutDialog(content: any) {
    // nasconde il menu
    this.onShowMenu('');
    // visualizza la finestra modale
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // chiusa con un pulsante
      console.log(result);
    }, (reason) => {
      // chiusa in altro modo
      console.log(reason);
    });
  } // showLogoutDialog

  /**
   * inverte le visibilità della sidebar
   * se la sidebar è visibile la nasconde, se nascosta la visalizza
   */
  onToggleSidebar() {
    // inverte la visualizzazione della sidebar
    this.togglerService.toggleSidebar();
  } // toggleSidebar

} // TopbarComponent
