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

const routes: Routes = [
  {path: 'inventaris', component: InventarisComponent},
  {path: 'kontak', component: KontakComponent},
  {path: 'peminjaman', component: PeminjamanComponent},
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
    HeaderLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
