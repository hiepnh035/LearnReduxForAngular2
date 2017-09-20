// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';

// reducers
import { benh } from './_reducers/benh.reducer';

// components
import { AppComponent } from './app.component';
import { BenhComponent } from './Benh/Benh.component';
import { BenhCountComponent } from './BenhCount/BenhCount.component';

// services
import { BenhService } from './services/benh.service';
import { BenhCreateComponent } from './BenhCreate/BenhCreate.component';
import { TinymceComponent } from './tinymce/tinymce.component';

@NgModule({
  declarations: [
    AppComponent,
    BenhComponent,
    BenhCountComponent,
    BenhCreateComponent,
    TinymceComponent
],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      dsBenh: benh
    }),
    StoreDevtoolsModule.instrument(),
    HttpModule
  ],
  providers: [
    BenhService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
