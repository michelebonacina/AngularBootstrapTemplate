import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private _showSidebar: boolean = true;  // sidebar visibility

  /**
   * constructor
   */
  constructor() { } // constructor

  /**
   * returns sidebar visibility
   * @returns {boolean} true if sidebar is visible, false otherwise
   */
  public get showSidebar(): boolean {
    return this._showSidebar;
  } // get showSidebar

  /**
   * sets sidebar visibility
   * @param {boolean} show true if sidebar is visible, false otherwise
   */
  public set showSidebar(show: boolean) {
    this._showSidebar = show;
  } // get showSidebar

} // ToggleService
