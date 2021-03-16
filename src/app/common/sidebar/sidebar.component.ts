// librerie
import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleLeft, faAngleRight, faCog, faLaughWink, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

// moduli applicativi
import { TogglerService } from '../@core/toggler.service';
import { MENU_ITEMS } from './@config/sidebar-menu.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // inizializza le icone
  faAngleDown = faAngleDown;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faLaughWink = faLaughWink;

  // proprietà private
  private _shownMenu: string = '';

  // proprietà pubbliche
  menuItems: any;
  showSidebar: boolean = false;

  /**
   * crea un nuovo componente
   * @param {TogglerService} togglerService gestore della visibilità dei componenti
   */
  constructor(
    private togglerService: TogglerService
  ) { } // constructor

  /**
   * inizializza il componente
   */
  ngOnInit(): void {
    // inizializza il menu
    this.menuItems = MENU_ITEMS;
    // inizalizza il toggler per la visualizzazione della sidebar
    this.togglerService.sidebarUpdated.subscribe((showSidebar: boolean) => {
      this.showSidebar = showSidebar;
    })
    // imposta la visualizzazione iniziale della sidebar
    this.togglerService.showSidebar = true;
  } // ngOnInit

  /**
   * visualizza il menu specificato
   * @param {string} menu menu da visualizzare
   */
  showMenu(menu: string) {
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
  } // isMenuShown

  /**
   * inverte le visibilità della sidebar
   * se la sidebar è visibile la nasconde, se nascosta la visualizza
   */
  toggleSidebar() {
    // inverte la visualizzazione della sidebar
    this.togglerService.toggleSidebar();
  } // toggleSidebar

} // SidebarComponent
