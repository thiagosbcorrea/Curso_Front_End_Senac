import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contadores } from './contadores';

describe('Contadores', () => {
  let component: Contadores;
  let fixture: ComponentFixture<Contadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contadores],
    }).compileComponents();

    fixture = TestBed.createComponent(Contadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
