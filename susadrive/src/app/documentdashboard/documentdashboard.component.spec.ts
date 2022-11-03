import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentdashboardComponent } from './documentdashboard.component';

describe('DocumentdashboardComponent', () => {
  let component: DocumentdashboardComponent;
  let fixture: ComponentFixture<DocumentdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
