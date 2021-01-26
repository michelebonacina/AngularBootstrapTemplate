import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faBell, faCog, faDonate, faEnvelope, faExclamationTriangle, faFileAlt, faList, faSearch, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  // initialize icons
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
  private shownMenu: String = '';

  // constructor
  constructor(private modalService: NgbModal) { } // constructor

  // component initialization
  ngOnInit(): void {
  } // ngOnInit

  // show the given menu
  showMenu(menu: String) {
    if (this.isMenuShown(menu)) {
      this.shownMenu = '';
    } else {
      this.shownMenu = menu;
    }
  } // showMenu

  // check if given menu is shown
  isMenuShown(menu: String): boolean {
    return this.shownMenu == menu;
  } // isMenuShowed

  // open logout popup confirmation
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
  }

} // TopbarComponent
