import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastRecommendationsComponent } from './podcast-recommendations.component';

describe('PodcastRecommendationsComponent', () => {
  let component: PodcastRecommendationsComponent;
  let fixture: ComponentFixture<PodcastRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
