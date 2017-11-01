import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedTweetsComponent } from './classified-tweets.component';

describe('ClassifiedTweetsComponent', () => {
  let component: ClassifiedTweetsComponent;
  let fixture: ComponentFixture<ClassifiedTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
