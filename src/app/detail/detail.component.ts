import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculosService } from '../veiculos.service';
import {Location} from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  bigSlider = false
  model: any = {}

  loading = true

  // @ViewChild('slider') slider: ElementRef

  constructor(
    public vs: VeiculosService,
    private route: Router,
    private _location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDetails()
  }

  goWelcome(){
    // this.route.navigate(['home'])
    this._location.back()
  }

  getDetails(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.vs.getById(id).subscribe(res=>{
      this.model = res
      if(this.model.img_lista && this.model.img_lista != ''){
        this.model.showImg = this.vs.imgUrl + '/'+ this.model.id  +'/' + this.model.img_lista
      }else{
        this.model.showImg = this.vs.imgUrl + '/'+ this.model.id  +'/' + this.model.img_veiculos[2]
      }
      this.model = this.parseImages(this.model)
      this.loading = false
      this.initSlider()
    })
  }

  parseImages(model){
    let arr = []
    Object.keys(model.img_veiculos).forEach(el=>{
        const img_parsed = this.vs.imgUrl + '/'+ this.model.id  +'/' + model.img_veiculos[el]
        arr.push(img_parsed)
    })
    model.listImages = arr
    return model
  }

  openBigSlider(){
    this.bigSlider = !this.bigSlider
    if(this.bigSlider){
      this.initSlider(true)
    }
  }

  closeBigSlider($event){
    console.log('$event.target.nodeName', $event.target)
    if($event.target.nodeName == 'DIV'){
      this.bigSlider = false
    }
  }

  initSlider(big?){
    requestAnimationFrame(()=>{
      const slide = big ? '#bigSlider' : '#slider'  
      console.log('jquery', $('#slider'))
      $(slide).lightSlider({
        // options here...
        item: 4,
        loop: true,
        controls: true,
        speed: 600,
        pause: 3000,
        keyPress: true,
        mode: 'slide', 
        responsive: [{
          breakpoint: 767,
          settings: {
            item: 2,
            slideMove: 1,
            slideMargin: 6,
          }
        }, {
          breakpoint: 481,
          settings: {
            item: 1,
            slideMove: 1
          }
        }]
      });
    })
  }

}
