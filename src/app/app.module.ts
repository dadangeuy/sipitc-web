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

const routes: Routes = [
  {path: 'inventaris', component: InventarisComponent},
  {path: 'kontak', component: KontakComponent},
  {path: 'peminjaman', component: PeminjamanComponent},
  {path: 'tentang', component: TentangComponent},
  {path: 'login', component: LoginComponent}
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
