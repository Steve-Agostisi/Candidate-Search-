# Candidate-Search-
# Candidate Search Application

This application allows employers to search for potential candidates using the GitHub API. It displays candidate information and allows users to save potential candidates for future reference.

## User Story

AS AN employer
I WANT a candidate search application
SO THAT I can hire the best candidates

## Acceptance Criteria

- WHEN the candidate search page loads, THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company.
- WHEN I click the "+" button, THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed.
- WHEN I click the "-" button, THEN the next candidate's information should be displayed without saving the current candidate.
- WHEN there are no candidates available to review, THEN an appropriate message should be shown indicating no more candidates are available.
- WHEN the potential candidates page loads, THEN the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html_url, and company.
- WHEN the page reloads, THEN the list of potential candidates should persist and be available for viewing.
- WHEN there are no potential candidates, THEN an appropriate message should be displayed indicating no candidates have been accepted.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url> 
  Here is a potential README.md for your Candidate Search application:

```markdown
# Candidate Search Application

This application allows employers to search for potential candidates using the GitHub API. It displays candidate information and allows users to save potential candidates for future reference.

## User Story

AS AN employer
I WANT a candidate search application
SO THAT I can hire the best candidates

## Acceptance Criteria

- WHEN the candidate search page loads, THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company.
- WHEN I click the "+" button, THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed.
- WHEN I click the "-" button, THEN the next candidate's information should be displayed without saving the current candidate.
- WHEN there are no candidates available to review, THEN an appropriate message should be shown indicating no more candidates are available.
- WHEN the potential candidates page loads, THEN the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html_url, and company.
- WHEN the page reloads, THEN the list of potential candidates should persist and be available for viewing.
- WHEN there are no potential candidates, THEN an appropriate message should be displayed indicating no candidates have been accepted.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd candidate-search
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the `environment` folder with your GitHub API token:
   ```sh
   VITE_GITHUB_TOKEN=YOUR_GITHUB_TOKEN
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

## Usage

- Use the candidate search page to view candidate information.
- Click the "+" button to save a candidate to the list of potential candidates.
- Click the "-" button to skip a candidate.
- View the list of saved candidates on the potential candidates page.

## Deployment

To deploy the application to Render, follow the instructions in the [Render documentation](https://render.com/docs/deploy-vite).

## Screenshots

![Candidate Search Page](path/to/screenshot1.png)
![Potential Candidates Page](path/to/screenshot2.png)

## Technologies Used

- React
- TypeScript
- Vite
- GitHub API

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

## License

This project is licensed under the MIT License.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
```

Make sure to replace placeholders like `<repository-url>` and `path/to/screenshot1.png` with actual values. This structure will help you meet the acceptance criteria for the README.md file.

Similar code found with 1 license type 
