import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InventarisComponent} from './inventaris/inventaris.component';
import {PeminjamanComponent} from './peminjaman/peminjaman.component';
import {TentangComponent} from './tentang/tentang.component';
import {KontakComponent} from './kontak/kontak.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {HeaderLoginComponent} from './header/header-login/header-login.component';
import {HeaderMenuComponent} from './header/header-menu/header-menu.component';
import {WebStorageModule} from 'ngx-store';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: InventarisComponent},
  {path: 'kontak', component: KontakComponent},
  {path: 'peminjaman/:id', component: PeminjamanComponent},
  {path: 'tentang', component: TentangComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InventarisComponent,
    PeminjamanComponent,
    TentangComponent,
    KontakComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    HeaderLoginComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    WebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
