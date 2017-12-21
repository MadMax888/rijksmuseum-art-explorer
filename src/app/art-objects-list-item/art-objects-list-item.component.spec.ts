import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectsListItemComponent } from './art-objects-list-item.component';

describe('ArtObjectsListItemComponent', () => {
  let component: ArtObjectsListItemComponent;
  let fixture: ComponentFixture<ArtObjectsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtObjectsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
