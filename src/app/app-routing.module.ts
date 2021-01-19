import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlComponent } from './views/codeConventions/html/html.component';
import { CssComponent } from './views/codeConventions/css/css.component';
import { JsComponent } from './views/codeConventions/js/js.component';
import { OAuthComponent } from './views/examples/o-auth/o-auth.component';
import { ScssSkillsComponent } from './views/frontendSkills/scss/scss-skills.component';

const routes: Routes = [
  { path: 'code-convention/html', component: HtmlComponent },
  { path: 'code-convention/css', component: CssComponent },
  { path: 'code-convention/js', component: JsComponent },
  { path: 'examples/auth', component: OAuthComponent },
  { path: 'skills/scss', component: ScssSkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
