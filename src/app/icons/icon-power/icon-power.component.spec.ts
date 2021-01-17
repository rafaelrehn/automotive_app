import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPowerComponent } from './icon-power.component';

describe('IconPowerComponent', () => {
  let component: IconPowerComponent;
  let fixture: ComponentFixture<IconPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
