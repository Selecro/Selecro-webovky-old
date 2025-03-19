import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorelessComponent } from './moreless.component';

describe('MorelessComponent', () => {
  let component: MorelessComponent;
  let fixture: ComponentFixture<MorelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorelessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
