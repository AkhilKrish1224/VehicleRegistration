import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeloginheaderComponent } from './beforeloginheader.component';

describe('BeforeloginheaderComponent', () => {
  let component: BeforeloginheaderComponent;
  let fixture: ComponentFixture<BeforeloginheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeloginheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforeloginheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
