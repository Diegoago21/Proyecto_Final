import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisproductoComponent } from './regisproducto.component';

describe('RegisproductoComponent', () => {
  let component: RegisproductoComponent;
  let fixture: ComponentFixture<RegisproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
