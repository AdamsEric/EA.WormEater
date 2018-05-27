import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaJogoComponent } from './area-jogo.component';

describe('AreaJogoComponent', () => {
  let component: AreaJogoComponent;
  let fixture: ComponentFixture<AreaJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
