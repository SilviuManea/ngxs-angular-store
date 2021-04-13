import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarPostsComponent } from './listar-posts/listar-posts.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { FormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, ListarPostsComponent, NuevoPostComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
