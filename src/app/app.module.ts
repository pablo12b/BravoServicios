import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecargaComponent } from './pages/recarga/recarga.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteComponent,
    RecargaComponent,
    EliminarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
