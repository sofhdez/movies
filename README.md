# Movie App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is built using React with Typescript. It connects to an API to fetch movie data using Axios.

## Available Scripts

In the project directory, you can run the following scripts:

### `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) right into your project, so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts, allowing you to tweak them. At this point, you are on your own.

You don't have to use `eject` ever. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## API Configuration

To connect to the movie API and fetch movie data, make sure to configure the API endpoint in the project. In the source code, locate the file `src/api/config.ts` and update the `API_ENDPOINT` constant with the appropriate API URL.

## Additional Dependencies

The following dependencies are used in this project:
- `axios`: A promise-based HTTP client used for making API requests.
- `react-router-dom`: A library for handling routing in React applications.

Please make sure to install them using `yarn` before running the application.

## Directory Structure

The project structure is organized as follows:

- `src`: Contains the source code files for the application.
  - `api`: Includes the API configuration file and helper functions for making API requests.
  - `components`: Contains reusable React components used in the application.
  - `pages`: Contains the main pages/components of the application.
  - `styles`: Includes CSS and SCSS files for styling the application.
  - `utils`: Contains utility/helper functions used throughout the application.

Feel free to modify the existing files or add new ones based on your project requirements.

## Contribution

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to create a pull request or submit an issue in the project repository.

Happy coding!
