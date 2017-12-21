import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ROOT = 'https://www.rijksmuseum.nl/api/en';
const COLLECTION_API = `${API_ROOT}/collection`;
const SHARED_API_PARAMS = {
  format: 'json',
  key: '3tYxhQmI'
};

@Injectable()
export class RijksmuseumApiService {
  httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAll(searchQuery) {
    return this.httpClient.get(COLLECTION_API, {
      params: {
        ...SHARED_API_PARAMS,
        imgonly: 'true',
        q: searchQuery
      }
    });
  }

  getDetails(objectNumber) {
    return this.httpClient.get(`${COLLECTION_API}/${objectNumber}`, {
      params: SHARED_API_PARAMS
    });
  }
}
