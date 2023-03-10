import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegComponent } from './new-reg.component';

describe('NewRegComponent', () => {
  let component: NewRegComponent;
  let fixture: ComponentFixture<NewRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
