import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AuthService {

    constructor(private http: Http) { }
 
    login(username: string, password: string) {
        let headers = new Headers();
        headers.append('Authorization', "Basic " + btoa(username + ":" + password));

        let options = new RequestOptions({ headers: headers });

        console.log(options);
        return this.http.get('http://localhost:8090/login/'+username, options)
             .map((response: Response) => {
                 // login successful if there's a jwt token in the response
                 let user = response.json();
                 if (user) {
                     // store user details and jwt token in local storage to keep user logged in between page refreshes
                     localStorage.setItem('currentUser', JSON.stringify(user));
                 }
             });
    }

    // login(username: string, password: string) {
    //     return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //         });
    // }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}