import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponente } from './components/micomponente/micomponente.component';
import { NewcomponentporTerminalComponent } from './components/newcomponentpor-terminal/newcomponentpor-terminal.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    NewcomponentporTerminalComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
