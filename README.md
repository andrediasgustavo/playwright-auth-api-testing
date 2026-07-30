# Playwright API Testing

This project contains API tests for the Restful-Booker application using Playwright.

## Prerequisites

- Node.js (version 20 or higher)
- npm

## Installation

1. Clone the repository.
2. Navigate to the project root directory.
3. Install the dependencies by running the following command:

```bash
npm install
```

## Project Structure

* `tests/`: Contains the test scripts (e.g., booking API tests).
* `fixtures/`: Contains the test data payloads (e.g., `booking.json`).
* `playwright.config.js`: Playwright configuration file with the base URL setup.
* `.github/workflows/`: Contains the GitHub Actions workflow file.

## Continuous Integration (CI)

This project uses GitHub Actions to automatically run the test suite. The workflow is configured to:

* Trigger on any push or pull request to the `main` and `master` branches.
* Set up the environment (Ubuntu latest) and install dependencies.
* Execute the Playwright API tests.
* Upload the test report (`playwright-report`) as a workflow artifact, which is retained for 30 days and can be downloaded from the GitHub Actions tab.

## How to Run

To execute the API tests in the terminal, run:

```bash
npx playwright test
```

To view the generated HTML report after the test execution, run:

```bash
npx playwright show-report
```
