import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HtmlComponent } from './views/codeConventions/html/html.component';
import { CssComponent } from './views/codeConventions/css/css.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JsComponent } from './views/codeConventions/js/js.component';
import { HeaderComponent } from './components/header/header.component';
import { OAuthComponent } from './views/examples/o-auth/o-auth.component';
import { ScssSkillsComponent } from './views/frontendSkills/scss/scss-skills.component';
import { ReduxComponent } from './views/frontendSkills/redux/redux.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HtmlComponent,
    CssComponent,
    JsComponent,
    HeaderComponent,
    OAuthComponent,
    ScssSkillsComponent,
    ReduxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    OAuthModule.forRoot(),
    CoreModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
