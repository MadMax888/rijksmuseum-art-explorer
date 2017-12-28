import { Component } from '@angular/core';

import { RijksmuseumApiService } from './rijksmuseum-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rijksmuseumApiService;
  artObjects;
  selectedArtObjectNumber;
  selectedArtObjectDetails;

  constructor(rijksmuseumApiService: RijksmuseumApiService) {
    this.rijksmuseumApiService = rijksmuseumApiService;
  }

  ngOnInit() {
    this.getArtObjects();
  }

  getArtObjects(searchQuery = '') {
    this.rijksmuseumApiService
      .getAll(searchQuery)
      .subscribe((response) => {
        this.artObjects = response.artObjects;
      });
  }

  getSelectedArtObjectDetails() {
    this.selectedArtObjectDetails = undefined;

    this.rijksmuseumApiService
      .getDetails(this.selectedArtObjectNumber)
      .subscribe((response) => {
        this.selectedArtObjectDetails = response.artObject;
      });
  }

  selectArtObject(artObjectToSelect) {
    this.selectedArtObjectNumber = artObjectToSelect.objectNumber;
    this.getSelectedArtObjectDetails();
  }

  isSelected(artObject) {
    return artObject.objectNumber === this.selectedArtObjectNumber;
  }

  onSearch($event, searchQuery) {
    $event.preventDefault();
    this.getArtObjects(searchQuery);
  }
}
