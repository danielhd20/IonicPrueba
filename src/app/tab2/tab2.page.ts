import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Aux1 = [];
  Aux2 = [];
  Aux3 = [];
  Aux4 = [];
  temporadas = [];

  
  constructor(
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.http.get<any>("https://mr-robot-express-api.herokuapp.com/seasons/")
    .subscribe(res => {  
      // this.Aux1 = res.season_1;
      // this.Aux2 = res.season_2;
      // this.Aux3 = res.season_3;
      // this.Aux4 = res.season_4;
      // this.temporadas = this.temporadas.concat(this.Aux1,this.Aux2,this.Aux3,this.Aux4)
      this.temporadas = res;
      console.log(this.temporadas)
    })
  }
}
