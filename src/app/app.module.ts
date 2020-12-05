import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import {IconRoutingModule} from '../routing.module';

@NgModule({
  imports: [
    BrowserModule,
    IconRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule,
    MatButtonModule,
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
