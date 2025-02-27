# AngularSite

A personal site for Daniel. I have the email and domain, why not put a site on it?

## Overview

My personal website has had many iterations over the years. It started with a `.html` file created in Word on a Primary School computer, then tidied up using Notepad, that has sadly been lost to time. It eventually progressed into a full fat .NET Framework site using the old ASP.NET MVC 4 + Razor starter template (including EntityFramework 5 and ASP.NET Identity!), before going back to a plain HTML & CSS (in reality, the .NET site with the innards removed), to its latest iteration of Angular + LESS.

This version now uses Angular, without the .NET backing, so I can
    
1. Refresh my Angular skills,
2. Make it play nice on mobile browser 
resolutions,
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


## Contributing

It's unlikely any contributions will be made to this personal site, and therefore no Pull Request process exists.

## License

This project is licensed under the MIT License.

## VS Code Setup

VS Code is using these extensions:

- Angular Language Service
- GitHub Copilot
- GitHub Copilot Chat
- markdownlint

## AI Prompts used

As part of this project was finally giving in an using AI, here are the prompts used with Copilot at various stages:

- The 1st request was lost and unavailable in the Copilot history, but it was along the lines of `Create a readme file in markdown`. It generated a more basic version of the readme that is created when using `ng new` with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0, missing out seem detail and being incorrectly formatted (e.g., no blank spaces after code blocks end), and so I merged the Angular CLI readme back into this one.
