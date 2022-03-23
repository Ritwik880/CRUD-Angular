import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitwikComponent } from './ritwik.component';

describe('RitwikComponent', () => {
  let component: RitwikComponent;
  let fixture: ComponentFixture<RitwikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RitwikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RitwikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
