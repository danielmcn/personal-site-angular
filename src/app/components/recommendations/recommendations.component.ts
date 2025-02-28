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
    new ContentRecommendation('The Phoenix Project by Gene Kim (Book)', new URL('https://www.waterstones.com/book/the-phoenix-project/gene-kim/kevin-behr/9781942788294')),
    new ContentRecommendation('Chaos Monkeys by Antonio García Martínez (Book)', new URL('https://www.goodreads.com/book/show/28259132-chaos-monkeys')),
    new ContentRecommendation('High Output Management by Andy Grove (Book)', new URL('https://medium.com/@iantien/top-takeaways-from-andy-grove-s-high-output-management-2e0ecfb1ea63')),
    new ContentRecommendation('The Checklist Manifesto by Atul Gawande (Book)', new URL('http://atulgawande.com/book/the-checklist-manifesto/')),
    new ContentRecommendation('Technology Connections (YouTube)', new URL('https://www.youtube.com/channel/UCy0tKL1T7wFoYcxCe0xjN6Q')),
    new ContentRecommendation('Plainly Difficult (YouTube)', new URL('https://www.youtube.com/c/PlainlyDifficult')),
    new ContentRecommendation('Coding Horror by Jeff Atwood (Blog)', new URL('https://blog.codinghorror.com/')),
    new ContentRecommendation('Joel On Software by Joel Spolsky (Blog)', new URL('https://www.joelonsoftware.com'))
  ]
}