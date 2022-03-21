import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModProductDetailComponent } from './mod-product-detail.component';

describe('ModProductDetailComponent', () => {
  let component: ModProductDetailComponent;
  let fixture: ComponentFixture<ModProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
