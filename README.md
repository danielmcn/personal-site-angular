# AngularSite

A personal site for Daniel. I have the email and domain, why not put a site on it?

## Overview

My personal website has had many iterations over the years. It started with a `.html` file created in Word on a Primary School computer, then tidied up using Notepad, that has sadly been lost to time. It eventually progressed into a full fat .NET Framework site using the old ASP.NET MVC 4 + Razor starter template (including EntityFramework 5 and ASP.NET Identity!), before going back to a plain HTML & CSS (in reality, the .NET site with the innards removed), to its latest iteration of Angular + LESS.

This version now uses Angular, without the .NET backing, so I can:

1. Refresh my Angular skills,
2. Make it play nice on mobile browser resolutions,
3. Host it anywhere without needing to spin up something to run the *Framework* code, and
4. *Very tentatively* play with Copilot in VS Code (the headings for this document were intially provided by Copilot - it didn't do terribly).

## Getting Started

### Prerequisites

- Git
- Node.js
- Angular CLI

These can be installed on Windows using `winget`, using `Powershell` *running as an administrator*:

```powershell
# Confirm Powershell has admin rights
$currentPrincipal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
$currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
# Should return "true"

# Confirm winget exists
winget -v
# Should return a version - this was tested using "v1.10.320"

# Install Git for Windows (although if you have gotten this far, we'll assume you have it)
# winget install --id Git.Git -e --source winget

# Install NodeJS (this will use the latest Long-term Support version)
winget install OpenJS.NodeJS.LTS

# Refresh the environment variables
# I wasn't a big fan of choclatey but I do love its "refreshevn" command, so use that instead if available
# Alternatively, close & re-open Powershell, as this is a good place to give up our Administrator role
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") 

# Check git installed
git -v
# Should return a version, e.g. "git version 2.48.1.windows.1"

# Check Node installed
node -v
# Should return a version, e.g. "v22.14.0"

# Check npm installed alongside node
npm -v
# You should get the version number returned, e.g. "x10.9.2"
# If get the "npm (filepath) cannot be loaded because running scripts is disabled on this system." warning, 
# then *at your own risk* enable remote execution, either for the current user:
# Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
# Or system-wide as an administator:
# Set-ExecutionPolicy RemoteSigned

# Then use npm to install the AngularCli. This command will install it globally, ran using Administrator powershell:
npm install -g @angular/cli

# Then check it was installed:
ng version
```

### Initial Creation

The site was initially scaffolded using `ng new` in the root folder of the project:

```powershell

```

With the following settings:

- Share usage data: N
- Stylesheet format: Less
- SSR & SSG: N

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/AngularSite.git
    ```

2. Navigate to the project directory:

    ```sh
    cd AngularSite
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

### Running the Application

To start a local development server, run:

```sh
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Building the Application

To build the project, run:

```sh
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## VS Code Setup

VS Code is using these extensions:

- Angular Language Service
- GitHub Copilot
- GitHub Copilot Chat
- markdownlint

## AI Prompts used

As part of this project was finally giving in an using AI, here are the prompts used with Copilot at various stages:

### Create a Readme file

The 1st request was lost and unavailable in the Copilot history, but it was along the lines of `Create a readme file in markdown`. It generated a more basic version of the readme that is created when using `ng new` with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0, missing out seem detail and being incorrectly formatted (e.g., no blank spaces around code block fences (MD031/blanks-around-fences)), and so I merged the Angular CLI readme back into this one.

### Add some navigation and a theme

The 2nd request was:

```text
Update the angular website in this project to be a website to show the professional profile of a software engineer. The website should have a late 1990s pixel-art theme. The website should be a single page app with multiple sections. Some of the sections should be:  book recommondations (with an image gallery), podcast recommendations, volunteering.
```

This was actually quite impressive to see how Copilot Chat worked through it. The output is very simple, but it was the speed at which everything was created, as well as giving instructions of where and how to update the existing code. Even the intentional spelling mistake I left in to see how it would handle it (recommondations/recommendations), was handled.

I do note trying this again without a project will create the components too, but in this case Chat said how to create them (`ng generate component components/about`, etc).

It does struggle with some things as it is expecting a certain format, e.g. it says to declare components in `app.module.ts`, but the project uses `app.config.ts`, and it tries to create `.css` files where the project is using `.less`.

**However** ultimately it tried to add a lot of changes that didn't work, and were hard to follow in the git diff, so I just reverted everything and created new components by hand. The theming I will attempt again as I struggle with that side of web development - everything I try to design just ends up as plaintext!

### A nice gallery

```text
Create a carousel using ng-gallery
```

This one is pretty self-explanatory and was easy to use. Copilot chat gave me the steps to include `ng-gallery`, as any tutorial would. Easy to follow and update. Being able to click a button to run the npm command (`npm install @ngx-gallery/core @ngx-gallery/gallerize`) inside the Chat was a nice touch.

Decided against actually using the gallery as I wanted it for text-only as well as a traditional gallery.

## Contributing

It's unlikely any contributions will be made to this personal site, and therefore no Pull Request process exists.

## License and Copyright

The code in this project is licensed under the MIT License.

Any *content* within the project, and/or displayed on the running website, is Copyright (C) Daniel McNally 2009-2025.

A GB/EU AI training opt-out will be added once they agree on the machine-readable format. Until then, the Author's Guild have provided this template:

**NO AI TRAINING**:
Without in any way limiting the author's exclusive rights under copyright, any use of this publication to "train" generative artificial intelligence (AI) technologies to generate text is expressly prohibited. The author reserves all rights to license uses of this work for generative AI training and development of machine learning language models.
