import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectDetailsComponent } from './art-object-details.component';

describe('ArtObjectDetailsComponent', () => {
  let component: ArtObjectDetailsComponent;
  let fixture: ComponentFixture<ArtObjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtObjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
