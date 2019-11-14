import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoreCardComponent } from './lore-card/lore-card.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { GameComponent } from './game/game.component';
import {HttpClientModule} from '@angular/common/http';
import { ButtonsComponent } from './buttons/buttons.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoreCardComponent,
    HeaderComponent,
    GameComponent,
    ButtonsComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
