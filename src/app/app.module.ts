import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HtmlComponent } from './views/codeConventions/html/html.component';
import { CssComponent } from './views/codeConventions/css/css.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JsComponent } from './views/codeConventions/js/js.component';

const routes: Routes = [
  { path: 'code-convention/html', component: HtmlComponent },
  { path: 'code-convention/css', component: CssComponent },
  { path: 'code-convention/js', component: JsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HtmlComponent,
    CssComponent,
    JsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
