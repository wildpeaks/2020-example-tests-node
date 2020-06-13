# JS Tests: Node

**Option 2: run entirely in Node**.

Tests run faster and use less memory when they don't need a browser.

This works best for testing code that isn't tied to the DOM (such as parsing text
or transforming JSON scenegraphs).

Unlike Option 1, this doesn't require a human to run the test,
so other actions could be chained (such as releasing a new version of a library,
or sending an alert that the build is broken).

The other options:
- [Option 1: Legacy](https://www.github.com/wildpeaks/example-tests-legacy)
- [Option 3: Node + Headless](https://www.github.com/wildpeaks/example-tests-node-headless)


-------------------------------------------------------------------------------

## Run the tests locally

First, [install Node](https://nodejs.org/en/download/).

Then install the project dependencies:

	npm install

Then run the `test` script (it runs the command defined in package.json):

	npm test

![Screenshot of Powershell](screenshots\Powershell.png)


-------------------------------------------------------------------------------

## Run the tests on code push

The file `/.github/worksflows/tests.yml` signals Github to re-run the tests
when new code is available, using [Github Actions](https://github.com/features/actions).

The results are displayed in the tab `Actions` of the repository.
Depending on your settings, you would also receive a notification
with a direct link to the results after a test has run.

![Screenshot of Github Actions](screenshots\Github_Actions.png)


-------------------------------------------------------------------------------

## VSCode

The `.vscode` folder is optional: it merely defines the path to the tests
and recommends a few matching extensions.

This way, you could run specific tests on their own in the debugger, using Tests Explorer,
and get direct feedback in the editor.

![Screenshot of VSCode with Tests Explorer](screenshots\VSCode.png)


-------------------------------------------------------------------------------
