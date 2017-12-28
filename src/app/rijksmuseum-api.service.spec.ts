import { RijksmuseumApiService } from './rijksmuseum-api.service';

describe('RijksmuseumApiService', () => {
  let rijksmuseumApiService;
  let httpClient;
  let httpClientGetResult;

  beforeEach(() => {
    httpClientGetResult = 'httpClientGetResult';
    httpClient = jasmine.createSpyObj('httpClient', {
      get: httpClientGetResult
    });

    rijksmuseumApiService = new RijksmuseumApiService(httpClient);
  });

  describe('#getAll', () => {
    let searchQuery;
    let getAllResult;

    beforeEach(() => {
      searchQuery = 'some search query';

      getAllResult = rijksmuseumApiService.getAll(searchQuery);
    });

    it('should make get request with correct params', () => {
      expect(httpClient.get).toHaveBeenCalledWith(
        'https://www.rijksmuseum.nl/api/en/collection',
        {
          params: {
            format: 'json',
            key: '3tYxhQmI',
            imgonly: 'true',
            q: searchQuery
          }
        });
    });

    it('should return result of get request', () => {
      expect(getAllResult).toBe(httpClientGetResult);
    });
  });

  describe('#getDetails', () => {
    let objectNumber;
    let getDetailsResult;

    beforeEach(() => {
      objectNumber = 'ABC-123';

      getDetailsResult = rijksmuseumApiService.getDetails(objectNumber);
    });

    it('should make get request with correct params', () => {
      expect(httpClient.get).toHaveBeenCalledWith(
        `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}`,
        {
          params: {
            format: 'json',
            key: '3tYxhQmI'
          }
        });
    });

    it('should return result of get request', () => {
      expect(getDetailsResult).toBe(httpClientGetResult);
    });
  });
});
