import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {


  //Esto para generar el menu de navegacion con las rutas exitentes
  routes = routes.map( (route) => ({
    title: route.title ?? '',
    path: route.path ?? '',
  }));



 }
