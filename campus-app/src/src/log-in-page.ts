import {IRouter, IRouteableComponent } from '@aurelia/router';
import { inject } from '@aurelia/kernel';
import { resolve } from 'aurelia';
import { HttpClient } from '@aurelia/fetch-client';



@inject(IRouter,HttpClient) // Inject the router
export class LoginPage implements IRouteableComponent {

   readonly router: IRouter = resolve(IRouter);

    email: string = '';
    password: string = '';
    errorMessage: string = '';
  
   
    private storedCredentials = {
      email1: 'name.lastname@unifr.ch',
      password1: '1234',
      email2: 'pino.sergi@unifr.ch',
      password2: '7Ottobre!',
      email3: 'lucas.mosch@unifr.ch',
      password3: 'prova',
    };

    // Handle login
    login() {
      if ((this.email === this.storedCredentials.email1 && this.password === this.storedCredentials.password1)||(this.email === this.storedCredentials.email2 && this.password === this.storedCredentials.password2)||(this.email === this.storedCredentials.email3 && this.password === this.storedCredentials.password3)) {
        this.errorMessage = '';
        window.location.href = './src/home.html';
        this.router.load('./home');

      } else {
        this.errorMessage = 'Invalid email or password!';
        
      }
    }
  }
  