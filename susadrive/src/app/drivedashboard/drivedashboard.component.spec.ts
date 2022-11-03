import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivedashboardComponent } from './drivedashboard.component';

describe('DrivedashboardComponent', () => {
  let component: DrivedashboardComponent;
  let fixture: ComponentFixture<DrivedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
