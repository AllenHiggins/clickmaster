import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickmasterComponent } from './clickmaster/clickmaster.component';
import { MainclickComponent } from './clickmaster/mainclick/mainclick.component';
import { HeaderclickComponent } from './clickmaster/headerclick/headerclick.component';
import { FooterclickComponent } from './clickmaster/footerclick/footerclick.component';
import { PhotolistdisplayclickComponent } from './clickmaster/photolistdisplayclick/photolistdisplayclick.component';
import { PhotolistService } from './clickmaster/photolist.service';

@NgModule({
  declarations: [
    AppComponent,
    ClickmasterComponent,
    MainclickComponent,
    HeaderclickComponent,
    FooterclickComponent,
    PhotolistdisplayclickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PhotolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
