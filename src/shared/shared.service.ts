import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class SharedService {
    constructor( private http: Http ) { }

    getCountryList(): Observable<any[]> {
        return this.http.get('../assets/json/country-list.json')
                        .map((response: Response) => <any[]> response.json());
    }
}