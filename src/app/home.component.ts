import { Component, OnInit } from '@angular/core';

import { User } from '../login/user';
import { UserService } from '../login/user.service';

@Component({
    selector: 'app-page-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
    }

}
