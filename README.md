# Getting Started with Technical Test - Frontend

Welcome to the ABC News Technical Test, we hope that you're able to navigate the tasks but if you do get stuck or need clarification, you can reach out to the Tech Lead who gave you the test. They'd be more than happy to help clarify any steps.

**Don't fork this repo, instead export a .zip file and email it to the person who gave you this test.**

## The Challenge

Editors at ABC News would like to create a robust experience for readers all across Australia. They create their articles in a CMS that is accessible via an API. We've taken a few sample API responses for you to use in the test.

You will be required to process these sample API responses to render the article content on a webpage, adding support for any various embeds that editors may wish to include. Each sample article that has been provided will contain a link to a live ABC News article for you to use as a reference on how the layout should look and feel. We're not looking for _exactly_ the same styles but something close would be ideal.

**Please note, the sample data may be slightly different from the current live article as the live articles are sometimes updated after being posted. (This can include removal of images, updated text, elements added/removed)**

Feel free to add additional packages that may assist you during the challenge. (Eg: `classnames`, `lodash`, `date-fns`)

**Legend:**
- `Files` - These are starting points for the task.
- `Hints` - Tips or things to consider when completing the task.
- `Reference` - Links to the original article for your reference.
- `Questions` - Additional questions to answer in the `NOTES.md` file along with your documentation.

**What we're looking for:**
Overall, we'll be looking at your file structure, component structure, test quality, code-quality, extensibility, competency with React and various other packages, and most of all, how you solve the main problem to ensure it's future-proofed given there were other requirements that were added weeks, months, or years later, that could be done by yourself or another colleague.

**What we're _not_ looking for:**
Generally, we like to keep things simple, so that other developers can understand a system quickly and easily so they can extend or modify it to their needs. This means we try to avoid those _magical_ solutions that require someone to read 3 pages of documentation to understand. _The more readable the better_. (Comments are also highly encouraged!)

## Documentation Tasks

Good documentation is always helpful, it can be the difference in spending 10 minutes vs 10 hours getting up to speed with a new system/technology.

We'd like to see documentation on your thought process; how you process a problem and how you create a solution. This can be as simple as a few paragraphs for each Technical Task.

Please use the provided `NOTES.md` file to capture any notes, documentation, or questions you have during the challenge.

**What we're looking for:**
Well written documentation with thought out explanations of how you understood the problem, and the process you went through in solving each problem. We're interested in understanding the different options or pathways you went down to achieve your final solution.

### Technical Tasks

Using the provided JSON files in `/src/data/*` process the response and render the content for readers to consume.

Each file has a similar schema but some contain new objects which will need to be processed differently.

**What we're _not_ looking for:**
Keep it simple when it comes to importing the JSON file, there's no need to set up an API to serve these from or do anything fancy to reduce bundle size with these files.

#### 1. Article layout + basic components

Editors have written an article and would like users to be able to read it. It contains text, quotes, and images. They'd like the article to be viewable on both Desktop & Mobile.

**Files:**
- `/src/pages/Article1.tsx`
- `/src/data/article1.json`

**Hints:**
- Create a set of components that will be able to render the given payload.
- How could you handle when a new component is added that isn't supported by the website?
- Is there any metadata returned in the API response that could improve the functionality of the website?

**Reference:**
- [Original Article](https://www.abc.net.au/news/2021-11-22/women-in-engineering-mentoring/100635010)

#### 2. Adding Third-party embeds

Editors have written another article! This one contains some of the components from the previous article, but this time includes a third-party embed. You'll need to extend your existing code to support this new component.

Given this is a demo site, the third-party embed should only link to the source and not attempt to render any third-party code, e.g.: `<span>Instagram Embed: <a href="URL">LINK</a></span>`. Your implementation should assume you've used their custom embed HTML instead of the demo snippet.

**Files:**
- `/src/pages/Article2.tsx`
- `/src/data/article2.json`

**Hints:**
- How can you ensure that future third-party embeds are handled neatly with regards to file structure?

**Questions:**
- Given the requirement to add an additional third-party embed, could this be done in a few simple steps? How would you explain to a developer how to add a YouTube Video embed.

**Reference:**
- [Original Article](https://www.abc.net.au/news/2021-11-15/museum-of-tropical-queenslands-underwater-shipwreck-explorer/100612884)
- [Original Article](https://www.abc.net.au/news/2021-11-15/museum-of-tropical-queenslands-underwater-shipwreck-explorer/100612884)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
