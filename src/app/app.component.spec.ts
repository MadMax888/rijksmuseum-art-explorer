import { AppComponent } from './app.component';
import { of as observableOf } from 'rxjs/observable/of';

describe('AppComponent', () => {
  let appComponent;
  let rijksmuseumApiService;
  let getAllResponse;

  beforeEach(() => {
    rijksmuseumApiService = jasmine.createSpyObj('rijksmuseumApiService', [
      'getAll'
    ]);
    getAllResponse = {
      artObjects: 'artObjects'
    };
    rijksmuseumApiService.getAll.and.returnValue(observableOf(getAllResponse));

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
});
