import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { enviroment } from './enviroments/enviroment';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/guards/auth.guard';
import { MoviesModule } from './movies/movies.module';
import { AuthenticationModule } from './authentication/authentication.module';

const MATERIAL_MODULES = [MatButtonModule, MatIconModule, MatMenuModule];
const APP_MODULES = [MoviesModule, AuthenticationModule];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    ...MATERIAL_MODULES,
    ...APP_MODULES,
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: enviroment.production,
      autoPause: true,
    }),
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
