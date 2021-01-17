import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  listModel = []

  imgUrl= 'http://www.leonautomoveis.com.br/admin/webroot/files/veiculos/'

  constructor(
    private httpClient: HttpClient
  ) {
    this.getAll()

   }

  getAll(){
    const url = 'http://www.leonautomoveis.com.br/api/veiculos/getall.php'
    this.httpClient.get(url).subscribe(res=>{
      this.listModel = res['records']
      this.listModel.forEach(el=>{
        if(el.img_lista && el.img_lista != ''){
          el.showImg = this.imgUrl + '/'+ el.id  +'/' + el.img_lista
        }else{
          el.showImg = this.imgUrl + '/'+ el.id  +'/' + el.img_veiculos[2]
        }
      })
    })
  }

  getById(id: string){
    const url = 'http://www.leonautomoveis.com.br/api/veiculos/getbyid.php?id='+ id
    return this.httpClient.get(url)
    // http://www.leonautomoveis.com.br/api/veiculos/getbyid.php?id=308-Allure-2-0-Flex-16V-5p-Aut
  }
  
}
