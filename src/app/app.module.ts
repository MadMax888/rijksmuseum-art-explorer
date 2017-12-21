import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RijksmuseumApiService } from './rijksmuseum-api.service';
import { ArtObjectsListItemComponent } from './art-objects-list-item/art-objects-list-item.component';
import { ArtObjectDetailsComponent } from './art-object-details/art-object-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtObjectsListItemComponent,
    ArtObjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RijksmuseumApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
