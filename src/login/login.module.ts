import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MyDatePickerModule } from 'mydatepicker';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AlertComponent } from './alert.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { SharedService } from '../shared/shared.service';

@NgModule ({
    imports: [
        FormsModule,
        BrowserModule,
        MyDatePickerModule,
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule,
        RouterModule.forChild ([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ])
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        AlertComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        UserService,
        SharedService
    ]
})

export class LoginModule {

}