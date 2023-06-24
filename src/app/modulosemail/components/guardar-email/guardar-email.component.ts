import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  template: `
    <h2>{{title}}</h2>
  `,
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent implements OnInit, DoCheck{
  title = 'NGZOO';
  emailContacto:any;

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  ngDoCheck(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
