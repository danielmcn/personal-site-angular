import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})

export class HomeComponent {
  name: string = "Daniel McNally";
  emailAddressObfuscated: string = "website at dannymc dot co dot uk";
  githubUrl: URL = new URL("https://github.com/danielmcn/personal-site-angular");
  linkedInProfileUrl: URL = new URL("https://www.linkedin.com/in/danielmcnally18/");
}
