import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculosService } from './veiculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leon';

  constructor(
    private vs: VeiculosService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ){
    console.log('activatedRoute',activatedRoute)
  }

  onActivate() {
    window.scroll(0,0);
      // //or document.body.scrollTop = 0;
      // //or document.querySelector('body').scrollTo(0,0)
      // ...
  }
}
