import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faBars, faBell, faCog, faDonate, faEnvelope, faExclamationTriangle, faFileAlt, faList, faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToggleService } from '../@core/toggle.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  // initialize icons
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

  // private properties
  private _shownMenu: string = '';

  /**
   * constructor
   * @param {NgbModal} modalService manage modal windows
   * @param {ToggleService} toggleService manage components toggle visibility
   */
  constructor(
    private modalService: NgbModal,
    private toggleService: ToggleService,
  ) { } // constructor

  /**
   * component initialization
   */
  ngOnInit(): void {
  } // ngOnInit

  /**
   * shows the given menu
   * @param {string} menu menu to be shown
   */
  showMenu(menu: string) {
    if (this.isMenuShown(menu)) {
      this._shownMenu = '';
    } else {
      this._shownMenu = menu;
    }
  } // showMenu

  /**
   * checks if given menu is shown
   * @param {string} menu menu to ckeck
   * @returns {boolean} true if menu is visible, false otherwise
   */
  isMenuShown(menu: string): boolean {
    return this._shownMenu == menu;
  } // isMenuShowed

  /**
   * open logout popup confirmation
   * @param {any} content content to show in popup
   */
  showLogoutDialog(content: any) {
    // hide menu
    this.showMenu('');
    // show modal
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // closed with a buttons
      console.log(result);
    }, (reason) => {
      // closed otherwise
      console.log(reason);
    });
  } // showLogoutDialog

  /**
   * toggle sidebar visibility.
   * switch sidebar from visible to hidden.
   */
  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
  } // toggleSidebar

} // TopbarComponent
