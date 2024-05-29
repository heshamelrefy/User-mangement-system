import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppLanguage } from '../models/lang';
import { TranslateService } from '@ngx-translate/core';
import { LocallyStoredItemsKeys } from '../models/locallyStoredItemsKeys';

@Injectable({
  providedIn: 'root'
})
export class AppLangService {
  appLanguage: BehaviorSubject<string> = new BehaviorSubject<string>(
    AppLanguage.ARABIC
  );
  constructor(public translate: TranslateService) {
    // Setup app languages
    translate.addLangs(["en", "ar"]);
    translate.setDefaultLang("ar");
    // Retreive current language from local storage

    const appLang = localStorage.getItem(LocallyStoredItemsKeys.AppLanguage);
    if (appLang) {
      this.setLanguage(appLang);
    } else {
      document.body.setAttribute("dir", "rtl");
      this.setLanguage(AppLanguage.ARABIC);
    }
  }
   setLanguage(language: AppLanguage | string) {
    if (language === AppLanguage.ARABIC) {
      document.body.setAttribute("dir", "rtl");
      this.translate.use("ar");

      this.setAppLang(AppLanguage.ARABIC);
    } else {
      document.body.setAttribute("dir", "ltr");
      this.translate.use("en");
      this.setAppLang(AppLanguage.ENGLISH);
    }
  }
  setAppLang(language: AppLanguage | string) {
    this.appLanguage.next(language);
    // Store current language on local storage
    localStorage.setItem(LocallyStoredItemsKeys.AppLanguage, language);
  }
  getAppLang() {
    return this.appLanguage;
  }
}
