import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppLanguage } from 'src/app/shared/models/lang';
import { AppLangService } from 'src/app/shared/services/app-lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAr = false
  appLanguage!: string
  isLogeedIn = false
  constructor(private appService:AppLangService,public _AuthServices:AuthService)
  {
    this._AuthServices.currentUser.subscribe(user =>{
      this.isLogeedIn = Object.keys(user).length === 0 ? false : true;
    })
  }
  ngOnInit() {
       this.getCurrentAppLanguage();
      }

    
getCurrentAppLanguage(): void {
    // Watch for language changes
    this.appService.getAppLang().subscribe((lang) => {
      this.appLanguage = lang;
      this.isAr = this.appLanguage === "ar" ? true : false;
    });
  }

  
switchLang() {
    // Switch the language
    if (!this.appLanguage || this.appLanguage === AppLanguage.ENGLISH) {
      this.appService.setLanguage(AppLanguage.ARABIC);
      this.isAr = true;
    } else {
      this.appService.setLanguage(AppLanguage.ENGLISH);
      this.isAr = false;
    }
  }
  logOut(): void
  {
    this._AuthServices.logOut()
  }
}
