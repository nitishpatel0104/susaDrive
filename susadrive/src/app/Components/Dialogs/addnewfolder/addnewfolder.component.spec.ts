import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewfolderComponent } from './addnewfolder.component';

describe('AddnewfolderComponent', () => {
  let component: AddnewfolderComponent;
  let fixture: ComponentFixture<AddnewfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewfolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
