import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { BookRecommendationsComponent } from "./components/book-recommendations/book-recommendations.component";
import { PodcastRecommendationsComponent } from "./components/podcast-recommendations/podcast-recommendations.component";
import { VolunteeringComponent } from "./components/volunteering/volunteering.component";
import { HomeComponent } from "./components/home/home.component";
import { SocialsComponent } from './components/socials/socials.component';

@Component({
  selector: 'app-root',
  standalone: true, //Todo: This caused pain thanks to Copilot generating things. Look up Standalone vs NgModule.
  imports: [
    RouterOutlet, 
    HomeComponent, AboutComponent, BookRecommendationsComponent, PodcastRecommendationsComponent, VolunteeringComponent, SocialsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'angularsite';
}
