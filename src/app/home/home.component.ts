import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listModel = []
  
  constructor(
    public vs: VeiculosService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  goWelcome(){
    this.route.navigate(['welcome'])
  }

  goToDetail(el){
    this.route.navigate(['detalhes/'+el.slug])
  }
  // http://www.leonautomoveis.com.br/api/veiculos/getall.php
}
