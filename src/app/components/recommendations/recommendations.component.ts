import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentRecommendation } from './contentRecommendation';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.less'
})

export class ContentRecommendationsComponent {
  // todo: Add a description as to why it's being recommended.
  contentRecommendations: ContentRecommendation[] = [
    new ContentRecommendation('🔉 Hacked', new URL('https://linktr.ee/hackedpodcast')),
    new ContentRecommendation('🔉 Darknet Diaries', new URL('https://darknetdiaries.com/')),
    new ContentRecommendation('📖 The Phoenix Project by Gene Kim', new URL('https://www.waterstones.com/book/the-phoenix-project/gene-kim/kevin-behr/9781942788294')),
    new ContentRecommendation('📖 High Output Management by Andy Grove', new URL('https://medium.com/@iantien/top-takeaways-from-andy-grove-s-high-output-management-2e0ecfb1ea63')),
    new ContentRecommendation('📖 The Checklist Manifesto by Atul Gawande', new URL('http://atulgawande.com/book/the-checklist-manifesto/')),
    new ContentRecommendation('📺 Technology Connections', new URL('https://www.youtube.com/channel/UCy0tKL1T7wFoYcxCe0xjN6Q')),
    new ContentRecommendation('📺 Kevin Fang', new URL('https://www.youtube.com/@kevinfaang')),
    new ContentRecommendation('📺 Half as Interesting', new URL('https://www.youtube.com/halfasinteresting')),
    new ContentRecommendation('📺 Tom Scott', new URL('https://www.youtube.com/user/enyay')),
    new ContentRecommendation('📺 Plainly Difficult', new URL('https://www.youtube.com/c/PlainlyDifficult')),
    new ContentRecommendation('📰 Coding Horror by Jeff Atwood', new URL('https://blog.codinghorror.com/')),
    new ContentRecommendation('📰 Joel On Software by Joel Spolsky', new URL('https://www.joelonsoftware.com'))
  ]
}