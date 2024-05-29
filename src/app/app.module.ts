import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { AccountModule } from './account/account.module';
import { ExtrapagesModule } from './extrapages/extrapages.module';

export function createTranslateLoader(http:HttpClient):any
{
  return new TranslateHttpLoader(http,"assets/i18n/",".json");
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    LayoutsModule,
    PagesModule,
    AccountModule,
    HttpClientModule,
    ExtrapagesModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
