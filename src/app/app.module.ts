import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouteModule } from './app-route.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaProtegerComponent } from './pagina-proteger/pagina-proteger.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

// Import the RouterModule
@NgModule({
  declarations: [
    AppComponent,
    SegundaPaginaComponent,
    PaginaNaoEncontradaComponent,
    PaginaComParametrosComponent,
    PaginaProtegerComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRouteModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
