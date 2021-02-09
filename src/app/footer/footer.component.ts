import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="page-footer font-small p-4">

  <div class="container content has-text-centered">
    © 2020 Copyright Nexent Sdn Bhd
  </div>

  </footer>
  `,
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
