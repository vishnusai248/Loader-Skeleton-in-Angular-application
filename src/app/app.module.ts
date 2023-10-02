import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponentComponent } from './skeleton-component/skeleton-component.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RepeatDirective } from './directives/repeat.directive';
@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponentComponent,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
