import { Component, resource, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Hermes Castro',
  gender: 'male',
  age: 30,
  address: 'Calle Falsa 123',
}
const client2 = {
  name: 'María Pérez',
  gender: 'female',
  age: 25,
  address: 'Avenida Siempre Viva 456',
};


@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n select
  client = signal(client1);


  invitationMap = {
    male: 'inivitarlo',
    female: 'inivitarla',
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);

  }

  //i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other : 'tenemos # clientes esperando.',
  })

  clients = signal([
    'Hermes Castro',
    'María Pérez',
    'Juan López',
    'Ana García',
    'Pedro Fernández',
    'Lucía Martínez',
    'Carlos Rodríguez',
    'Laura Sánchez',
  ])

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  //keyValue Pipe
  profile = {
    name: 'Hermes Castro',
    age: 18,
    address: 'Calle Falsa 123',
  }

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('Hola soy una promesa');
      reject('Error: No se pudo resolver la promesa');
      console.log('Promesa resuelta');
    }, 3500);
  });


  myObservableTimer = interval(2000).pipe(
    map((value) => value+1),
    tap((value) => console.log('tap: ',value))
  )
 }
