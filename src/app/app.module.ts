import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { HeaderComponent } from './header/header.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    HeaderComponent,
    FlexboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
