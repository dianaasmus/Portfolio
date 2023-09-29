import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FixedItemsComponent } from './fixed-items/fixed-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartscreenComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactMeComponent,
    FooterComponent,
    ImprintComponent,
    FixedItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
