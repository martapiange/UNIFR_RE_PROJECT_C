import Aurelia from 'aurelia';
import {MyApp} from './my-app';
import { HomePage } from './home'; // Import HomePage explicitly
import { RouterConfiguration } from '@aurelia/router';

Aurelia

.register(RouterConfiguration.customize({ useUrlFragmentHash: false }))   // Enable pushState routing
.app(MyApp)  //launching of the first page
  .start();

