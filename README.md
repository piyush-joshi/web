# Initial Project Template

The purpose of this repository is to set up an initial project template environment for developing applications using Typescript and TDD. Testing needs are met by uses Jest and Puppeteer for unit & integration testing and end-to-end testing respectfully.

Just create your source files in the src directory and run the unit & integration tests using <i>npm run test</i> command. For end-to-end testing, configure Puppeteer configuration file /src/specs/e2e.js then run <i>npm run e2e</i>.

Tip use Chrome Puppeteer extension to generate skeleton code for the head start.

Make sure to remove the original origin and install the dependencies, for example.

<pre>
 <i>git remote rm origin</i> 
 <i>npm install</i>
</pre>

If you are unfamiliar with Git's remote commands see <a href="https://docs.github.com/en/github/using-git/managing-remote-repositories">Managing remote repositories</a>

Jest's unit and integration testing, coverage reports are configured to show on the command line as well as from the generated HTML file (./html-report/report.html).
