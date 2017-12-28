import { AppComponent } from './app.component';
import { of as observableOf } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';

describe('AppComponent', () => {
  let appComponent;
  let rijksmuseumApiService;
  let getAllResponse;
  let getDetailsResponse;

  beforeEach(() => {
    getAllResponse = { artObjects: 'artObjects' };
    getDetailsResponse = { artObject: 'artObjectDetails' };

    rijksmuseumApiService = jasmine.createSpyObj('rijksmuseumApiService', {
      getAll: observableOf(getAllResponse),
      getDetails: observableOf(getDetailsResponse)
    });

    appComponent = new AppComponent(rijksmuseumApiService);
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      appComponent.ngOnInit();
    });

    it('should call getAll on rijksmuseumApiService with empty search query', () => {
      expect(rijksmuseumApiService.getAll).toHaveBeenCalledWith('');
    });

    it('should store artObjects from response', () => {
      expect(appComponent.artObjects).toBe(getAllResponse.artObjects);
    });
  });

  describe('#onSearch', () => {
    let $eventMock;
    let searchQuery;

    beforeEach(() => {
      $eventMock = jasmine.createSpyObj('$event', ['preventDefault']);
      searchQuery = 'some search query';

      appComponent.onSearch($eventMock, searchQuery);
    });

    it('should prevent default behavior of event', () => {
      expect($eventMock.preventDefault).toHaveBeenCalled();
    });

    it('should call getAll on rijksmuseumApiService with passed search query', () => {
      expect(rijksmuseumApiService.getAll).toHaveBeenCalledWith(searchQuery);
    });

    it('should store artObjects from response', () => {
      expect(appComponent.artObjects).toBe(getAllResponse.artObjects);
    });
  });

  describe('#selectArtObject', () => {
    let artObjectToSelect;

    beforeEach(() => {
      artObjectToSelect = {
        objectNumber: 'ABC-42'
      };
      appComponent.selectedArtObjectDetails = 'previouslySelectedArtObjectDetails';
      appComponent.selectArtObject(artObjectToSelect);
    });

    it('should store object number of selected art object', () => {
      expect(appComponent.selectedArtObjectNumber).toBe(artObjectToSelect.objectNumber);
    });

    it('should call getDetails on rijksmuseumApiService with object number', () => {
      expect(rijksmuseumApiService.getDetails).toHaveBeenCalledWith(artObjectToSelect.objectNumber);
    });

    it('should store artObject from response', () => {
      expect(appComponent.selectedArtObjectDetails).toBe(getDetailsResponse.artObject);
    });
  });

  describe('#isSelected', () => {
    let selectedArtObject;
    let notSelectedArtObject;

    beforeEach(() => {
      selectedArtObject = {
        objectNumber: 'ABC-123'
      };

      notSelectedArtObject = {
        objectNumber: 'DDD-777'
      };

      appComponent.selectedArtObjectNumber = selectedArtObject.objectNumber;
    });

    it('should return false if passed art object is not selected', () => {
      expect(appComponent.isSelected(notSelectedArtObject)).toBe(false);
    });

    it('should return true if passed art object is selected', () => {
      expect(appComponent.isSelected(selectedArtObject)).toBe(true);
    });
  });
});
