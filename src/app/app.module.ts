import { componentAssets } from './app-component.module';
import { materialAssets } from './app-material.module';
import { PortfolioService } from './service/portfolio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    componentAssets
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    materialAssets,
    SlickCarouselModule,
    MatDialogModule
  ],
  exports: [ MatDialogModule ],
  entryComponents: [ componentAssets ],
  providers: [ PortfolioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
