import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  episodios=[];
  constructor(
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.http.get<any>("https://mr-robot-express-api.herokuapp.com/episodes/")
    .subscribe(res => {

      this.episodios=res[0].all;
      console.log(this.episodios)
      console.log(res);
    })
  }
 

}
