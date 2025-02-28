import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentRecommendationsComponent } from './recommendations.component';

describe('ContentRecommendationsComponent', () => {
  let component: ContentRecommendationsComponent;
  let fixture: ComponentFixture<ContentRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
