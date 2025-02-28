import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { ContentRecommendationsComponent } from "./components/recommendations/recommendations.component";
import { VolunteeringComponent } from "./components/volunteering/volunteering.component";
import { HomeComponent } from "./components/home/home.component";
import { SocialsComponent } from './components/socials/socials.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

@Component({
  selector: 'app-root',
  standalone: true, //Todo: Look up Standalone vs NgModule.
  imports: [
    RouterOutlet, HomeComponent, AboutComponent, ContentRecommendationsComponent, SocialsComponent, CertificationsComponent, //VolunteeringComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})

export class AppComponent {
  title = "Daniel's Website";
}
