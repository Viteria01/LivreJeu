import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreCardComponent } from './lore-card.component';

describe('LoreCardComponent', () => {
  let component: LoreCardComponent;
  let fixture: ComponentFixture<LoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
