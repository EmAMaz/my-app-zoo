import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title:string = 'Bienvenido a NGZoo';
  ngOnInit(): void {
    console.log('homeComponent cargado');
  }

}
