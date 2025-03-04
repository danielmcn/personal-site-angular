import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Social } from './social';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.less'
})

export class SocialsComponent {
  socials: Social[] = [
    new Social('LinkedIn', new URL('https://www.linkedin.com/in/danielmcnally18/')),
    new Social('StackOverflow', new URL('http://stackoverflow.com/users/1368429/dannymc18')),
    new Social('GitHub', new URL('https://github.com/danielmcn')),
    new Social('Strava', new URL('https://www.strava.com/athletes/52835605')),
    new Social('Pluralsight', new URL('https://app.pluralsight.com/profile/daniel-mcnally-18')),
    new Social('Goodreads', new URL('https://www.goodreads.com/danielmcnally18')),
    new Social('StackShare', new URL('https://stackshare.io/danielmcn/my-stack')),
  ]
}