import { Component, OnInit, Input } from '@angular/core';

import { User } from '../login/user';
import { UserService } from '../login/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})

export class NavbarComponent implements OnInit {
    @Input() currentUser: User;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

}
