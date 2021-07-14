import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCardsPageComponent } from './admin-cards-page.component';

describe('AdminCardsPageComponent', () => {
  let component: AdminCardsPageComponent;
  let fixture: ComponentFixture<AdminCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCardsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
