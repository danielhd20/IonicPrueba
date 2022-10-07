import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Pprinciales = [];
  Psecundarios = [];
  personajes = [];

  
  constructor(
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.http.get<any>("https://mr-robot-express-api.herokuapp.com/characters/")
    .subscribe(res => {

      this.Pprinciales = res[0].main;
      this.Psecundarios = res[0].recurring;
      this.personajes = this.personajes.concat(this.Pprinciales, this.Psecundarios)
      //console.log(this.personajes)
    })
  }
 
}

