import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomponentporTerminalComponent } from './newcomponentpor-terminal.component';

describe('NewcomponentporTerminalComponent', () => {
  let component: NewcomponentporTerminalComponent;
  let fixture: ComponentFixture<NewcomponentporTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomponentporTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomponentporTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
