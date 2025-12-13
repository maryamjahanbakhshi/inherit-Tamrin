import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Borowspage } from './borowspage';

describe('Borowspage', () => {
  let component: Borowspage;
  let fixture: ComponentFixture<Borowspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Borowspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Borowspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
