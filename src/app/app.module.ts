import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AboutComponent} from './Component/aut/about/about.component';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './Component/aut/login/login.component';
import {MenuComponent} from './Component/aut/menu/menu.component';
import {RegisproductoComponent} from './Component/aut/regisproducto/regisproducto.component';
import {RegisterComponent} from './Component/aut/register/register.component';
import {HomeComponent} from './Component/home/home.component';
import {FooterComponent} from './Component/share/footer/footer.component';
import {NavbarComponent} from './Component/share/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {TokenInterceptorService} from './Services/TokenInterceptor.service';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    MenuComponent,
    RegisproductoComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    RegisterComponent,
    

  ],
  imports: [
    BrowserModule,
    RouterModule,
    appRoutingModule,  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule


  ],
  providers: [JwtHelperService, {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
