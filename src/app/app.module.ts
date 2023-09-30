import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducer} from "../store/reducer/reducer";
import {ReadComponent} from './read/read.component';
import {CreateComponent} from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({tutorial: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
