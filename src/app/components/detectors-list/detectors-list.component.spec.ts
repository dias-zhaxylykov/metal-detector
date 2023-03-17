import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectorsListComponent } from './detectors-list.component';

describe('DetectorsListComponent', () => {
  let component: DetectorsListComponent;
  let fixture: ComponentFixture<DetectorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectorsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
