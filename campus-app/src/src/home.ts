import { IRouteableComponent } from '@aurelia/router';
import { HttpClient } from '@aurelia/fetch-client';

export class HomePage implements IRouteableComponent {
    private http: HttpClient = new HttpClient();

    async bound() {
        const response = await this.http.fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);

        const result = await response.json();
   }
}