# Parts Dashboard

## Goal

Build a dashboard website that shows Parts with Features for control with deviations from expected measures.

## Technical decisions

- I decided to use React library for this FrontEnd project even though for low end devices its faster and more performant to use pure JavaScript, since it does not adds weight to the project and less code is shipped. But since most of the projects I understand are written using React, and I it will take me less time to do it this way, I'll go with it. There are also some advantages around the development process related to using a library or framework like this, and it is that it gives you structure, meaning consistent good results on long term, also reducing complexity (for instance, for rounting), and it will be easier to maintain over time, being a decent solution for a bigger audience.
- I decided to use Context for global state managemenet since the solution small enought for it.
- I didn't use GraphQL for the solution because of two reasons: I wanted to show how to connect to a backend (and using GraphQL I might connect to the DB directly) and also I don't think I was going to be able to properly set everything up at the given time.

## Considerations

- Deviation boundaries are set at Part level
- Values from Controls are always numeric
- Features grid are not dynamically created components. They are previously defined
- Feature status is based on worst Control status
- Control status is based on deviation
- Deviation out total is calculated summing up N deviations outside tolerance
- I implemented only one dashboard since I'm not sure how the behavior would be when there are several
- I'm using scss modules to avoid name clashes. No need for name convention in this case, like BEM.

## Technical Debt

- Implement technics for responsiveness
- Move colors used on CSS to palette file
- Use SVG images for icons and use it from CSS with class modifiers

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
