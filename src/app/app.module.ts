import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/pages/login/login.component";
import { NoRouteFoundComponent } from './components/pages/no-route-found/no-route-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoRouteFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
