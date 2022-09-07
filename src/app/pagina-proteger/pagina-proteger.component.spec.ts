import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProtegerComponent } from './pagina-proteger.component';

describe('PaginaProtegerComponent', () => {
  let component: PaginaProtegerComponent;
  let fixture: ComponentFixture<PaginaProtegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaProtegerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaProtegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
