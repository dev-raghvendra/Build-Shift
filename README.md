# Build Shift

`buildshift` is a simple yet powerful CLI tool that automates the process of building your frontend app and seamlessly transferring the build files to your backend directory. With this tool, you no longer have to manually move your static assets or frontend build files to the backend after every change. It integrates your frontend and backend effortlessly, allowing you to focus more on coding and less on managing build steps.


## Table of Contents

- [Installation](#installation)
    - [Global Installation](#global-installation)
    - [Local Installation](#local-installation)
- [Usage](#usage)
    - [Using npx](#using-npx)
    - [Using Global Installation](#using-global-installation)
- [Example](#example)
- [License](#license)
- [Contributing](#contributing)
- [About](#about)

## Installation

You can install `buildshift` either globally or locally depending on your needs.

### Global Installation

To use `buildshift` from anywhere on your system, install it globally:

```bash
npm install -g buildshift
```

### Local Installation

To install the package locally within your project, run the following command:

```bash
npm install buildshift --save-dev
```

This is recommended if you want the tool to be available only within the project.

## Usage

### Using npx (Local Installation)

Once installed locally, you can run `buildshift` using `npx` without needing to install it globally:

```bash
npx buildshift <frontend-path> <backend-path>
```

### Using Global Installation

If you've installed `buildshift` globally, you can run it directly from the command line:

```bash
buildshift <frontend-path> <backend-path>
```

In both cases, the tool will:

- Build your frontend app located in the specified `<frontend-path>`.
- Move the resulting build files to the specified `<backend-path>`.

## Example

Let's say you have the following project structure:

```
/my-project
        /frontend    # Your React or other frontend project
        /backend     # Your backend service (Node, Express, etc.)
```

To build the frontend and move the build files into the backend, run:

### Using npx (Local Installation)

```bash
npx buildshift ./frontend ./backend
```

### Using Global Installation

```bash
buildshift ./frontend ./backend
```

This command will:

1. Run the frontend build process (typically `npm run build`).
2. Copy the build output to the `/backend/public` directory (by default).

You can also specify a custom directory for the built frontend by passing the `dist-dir` argument, e.g.:

```bash
buildshift ./frontend ./backend custom-dist
```

In this case, the build will be copied from the `./frontend/custom-dist` directory instead of the default `./frontend/dist`.

## License

`buildshift` is licensed under the [MIT License](LICENSE). See the `LICENSE` file for more details.

## Contributing

We welcome contributions! If you'd like to contribute to `buildshift`, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and add tests.
4. Submit a pull request with a clear description of your changes.


## About

`buildshift` was created to simplify and automate the process of integrating frontend builds with backend services, reducing the need for manual steps in the deployment process.

If you have any questions, suggestions, or issues, feel free to open an issue on [GitHub](https://github.com/your-repo/buildshift/issues) or submit a pull request.
