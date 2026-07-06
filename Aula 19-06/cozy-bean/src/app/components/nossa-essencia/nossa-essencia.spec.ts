import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossaEssencia } from './nossa-essencia';

describe('NossaEssencia', () => {
  let component: NossaEssencia;
  let fixture: ComponentFixture<NossaEssencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossaEssencia],
    }).compileComponents();

    fixture = TestBed.createComponent(NossaEssencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
