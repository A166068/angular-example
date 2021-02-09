import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  #nav-frame a {
    text-align: center;
    padding-left: 50px;
    padding-right:50px;
  }   
  `],
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  login_tab() {
    window.open('/data-source');
  }

  ngOnInit(): void {
  }

}
