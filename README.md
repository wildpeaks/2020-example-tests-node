# JS Tests: Node

**Option 2: run entirely in Node**.

Tests run faster and use less memory when they don't need a browser.

This works best for testing code that isn't tied to the DOM (such as parsing text),
or only uses basic DOM manipulation (because [JSDOM](https://github.com/jsdom/jsdom) provides a basic DOM for Node).

However, you would need a (headless) browser for testing how things are rendered (e.g. CSS styles or vendor-specific features)
and simulating user interactions.

The other options:
- [Option 1: Legacy](https://www.github.com/wildpeaks/example-tests-node)
- [Option 3: Node + Headless](https://www.github.com/wildpeaks/example-tests-node-headless)


-------------------------------------------------------------------------------

## Run the tests locally

First, [install Node](https://nodejs.org/en/download/).

Then install the project dependencies:

	npm install

Then run the `test` script (it runs the command defined in package.json):

	npm test


-------------------------------------------------------------------------------

## Run the tests on code push

The file `/.github/worksflows/tests.yml` signals Github to re-run the tests
when new code is available, using [Github Actions](https://github.com/features/actions).

The results are displayed in the tab `Actions` of the repository.

Depending on your settings, you would also receive a notification with a direct link to the results after a test has run.

Unlike Option 1, this doesn't require a human to run the test,
so other actions could be chained (such as releasing a new version of a library,
or sending an alert that the build is broken).


-------------------------------------------------------------------------------

