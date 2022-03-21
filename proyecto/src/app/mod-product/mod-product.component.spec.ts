import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModProductComponent } from './mod-product.component';

describe('ModProductComponent', () => {
  let component: ModProductComponent;
  let fixture: ComponentFixture<ModProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
