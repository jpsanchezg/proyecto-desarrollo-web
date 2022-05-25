import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopDisplayComponent } from './product-shop-display.component';

describe('ProductShopDisplayComponent', () => {
  let component: ProductShopDisplayComponent;
  let fixture: ComponentFixture<ProductShopDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShopDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShopDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
