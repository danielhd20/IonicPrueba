import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {
  personaje = [];
  redes = [];
  Pprinciales = [];
  Psecundarios = [];
  personajes = [];


  profileId: string
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.params.id;
    this.http.get<any>("https://mr-robot-express-api.herokuapp.com/characters/" + this.profileId)
    .subscribe(res => {

      this.personaje = res;
      this.redes = res.social;

    })
    // console.log(this.profileId)
    // this.http.get<any>("https://mr-robot-express-api.herokuapp.com/characters/")
    // .subscribe(res => {

    //   this.Pprinciales = res[0].main;
    //   this.Psecundarios = res[0].recurring;
    //   this.personajes = this.personajes.concat(this.Pprinciales)
    //   this.personajes = this.personajes.concat(this.Psecundarios)
    //   this.redes = this.personajes[parseInt(this.profileId, 10)-1].social;
    //   console.log(this.personajes)
    //      console.log(this.personajes[parseInt(this.profileId, 10)-1].social)
    // })
  }
  }


