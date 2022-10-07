import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-detallesep',
  templateUrl: './detallesep.page.html',
  styleUrls: ['./detallesep.page.scss'],
})
export class DetallesepPage implements OnInit {

  episodio=[];

  detalleId: string
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.detalleId = this.activatedRoute.snapshot.params.id;
    this.http.get<any>("https://mr-robot-express-api.herokuapp.com/episodes/" + this.detalleId)
    .subscribe(res => {

      this.episodio=res;
      console.log(this.episodio)
    })

}
}
