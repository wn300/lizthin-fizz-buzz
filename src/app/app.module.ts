import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiplosComponent } from './multiplos/multiplos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ResultSharedService } from './services/result-shared.service';
@NgModule({
  declarations: [
    AppComponent,
    MultiplosComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ResultSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
