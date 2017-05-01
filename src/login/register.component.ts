import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMyOptions } from 'mydatepicker';

import { AlertService} from './alert.service';
import { UserService } from './user.service';
import { SharedService } from '../shared/shared.service';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: [ 'register.component.css' ]
})

export class RegisterComponent implements OnInit {
    model: any = {};
    countryList: any[];
    loading = false;

    private myDatePickerOptions: IMyOptions = {
        dateFormat: 'mmm dd, yyyy',
    };

    constructor (
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private sharedService: SharedService) { }

    ngOnInit(): void {
        this.sharedService.getCountryList()
            .subscribe(country => this.countryList = country);
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }
}
