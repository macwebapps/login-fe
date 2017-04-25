import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Feature Modules*/
import { LoginModule } from '../login/login.module';

/* Services */
import { AlertService } from '../login/alert.service';

/* Guards */
import { AuthGuard } from '../login/auth.guard';

// used to create fake backend
import { fakeBackendProvider } from '../_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

/* Page Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LoginModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, canActivate: [ AuthGuard ]  },
            { path: 'home', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ])
    ],
    providers: [
        AlertService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
