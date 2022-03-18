import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTiendaComponent } from './navbar-tienda.component';

describe('NavbarTiendaComponent', () => {
  let component: NavbarTiendaComponent;
  let fixture: ComponentFixture<NavbarTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
