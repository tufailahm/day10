import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;

  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title REVATURE App',async() =>{
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    let component = fixture.componentInstance;
    let compiled = fixture.nativeElement;
    // expect(component.title).toEqual("Revature App");
    expect(compiled.querySelector('h2').textContent).toContain('REVATURE App');
  })
});
