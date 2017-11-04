import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetThemesComponent } from './tweet-themes.component';

describe('TweetThemesComponent', () => {
  let component: TweetThemesComponent;
  let fixture: ComponentFixture<TweetThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
