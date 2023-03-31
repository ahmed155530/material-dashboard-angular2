import { BaseService } from 'base/services/base.service';
import { Component, Injector, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/admin/lookups/branches', title: 'Branches', icon: 'pin_drop', class: '' },
  // { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  // { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
  // { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
  // { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  // { path: '/maps', title: 'Branches', icon: 'location_on', class: '' },
  // { path: '/maps', title: 'Food & Drink', icon: 'fastfood', class: '' },
  //{ path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  //{ path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends BaseService implements OnInit {
  menuItems: any[];

  constructor(
    public override injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {
    document.body.dir = this.translationService.RetrieveDir();
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
