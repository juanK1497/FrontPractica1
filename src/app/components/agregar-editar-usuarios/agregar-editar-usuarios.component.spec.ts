import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarUsuariosComponent } from './agregar-editar-usuarios.component';

describe('AgregarEditarUsuariosComponent', () => {
  let component: AgregarEditarUsuariosComponent;
  let fixture: ComponentFixture<AgregarEditarUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarUsuariosComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
