import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Memberspage } from './memberspage';

describe('Memberspage', () => {
  let component: Memberspage;
  let fixture: ComponentFixture<Memberspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Memberspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Memberspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
