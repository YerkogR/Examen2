import { Component, OnInit } from '@angular/core';
import {Carrusel, ListaCarrusel} from '../../interfaces/carrusel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Carrusel: Array<Carrusel>=ListaCarrusel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
