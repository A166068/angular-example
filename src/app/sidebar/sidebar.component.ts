import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#showFilePanel').click(function (event) {
      if ($('.notification-container').hasClass('dismiss')) {
        $('.notification-container').removeClass('dismiss').addClass('selected').show();
      }
      $("#showFilePanel").hide();
      $("#closeFilePanel").show();
      event.preventDefault();
    });

    $('#closeFilePanel').click(function (event) {
      if ($('.notification-container').hasClass('selected')) {
        $('.notification-container').removeClass('selected').addClass('dismiss');

      }
      event.preventDefault();
      $("#showFilePanel").show();
      $("#closeFilePanel").hide();
    });
  }

}
