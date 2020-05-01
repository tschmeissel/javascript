import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyFirstModuleModule } from './my-first-module/my-first-module.module';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MyFirstModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
