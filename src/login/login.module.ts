import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AlertComponent } from './alert.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@NgModule ({
    imports: [
        FormsModule,
        BrowserModule,
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
        UserService
    ]
})

export class LoginModule {

}