import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetalheComponent } from './serie-detalhe.component';

describe('SerieDetalheComponent', () => {
  let component: SerieDetalheComponent;
  let fixture: ComponentFixture<SerieDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
