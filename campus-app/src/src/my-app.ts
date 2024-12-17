import { LoginPage } from "./log-in-page";
import { HomePage } from "./home";


export class MyApp {
  static routes = [
    {
      path: [''],
      component: LoginPage,
      title: 'LogIn',
    },
    {
      path: 'home',
      component: () => import('./home'),
      title: 'Home',
    },
  
  ];
}