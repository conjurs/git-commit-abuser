# GIT COMMIT ABUSER

This project is a Node.js script that allows you to create multiple Git commits with randomized dates within a specified date range. It's useful for testing or simulating Git activity patterns.

## Features

- Create multiple Git commits with randomized dates
- Specify a custom date range for commits
- Configurable number of commits to generate
- Make your profile look active like you've been hard at work 😁

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12 or higher recommended)
- Git installed and configured on your system
- A GitHub account and a repository to test with

## Installation

1. Get this repository from github to your computer

2. Navigate to the project directory:
   ```
   cd git-commit-abuser
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

## Usage

To use this script, follow these steps:

1. Open the `index.js` file in your preferred text editor.

2. Modify the following variables at the bottom of the file:
   ```javascript
   const startDate = "YYYY-MM-DD"; // Change this to your desired start date
   const endDate = moment().format("YYYY-MM-DD"); // Change this to your desired end date (default is today)
   const numberOfCommits = xx; // Change this to the number of commits you want
   ```

   Replace `"YYYY-MM-DD"` with your desired start date, and `xx` with the number of commits you want to generate.

3. Save the changes to `index.js`.

4. Run the script using Node.js:
   ```
   node index.js
   ```

5. The script will create the specified number of commits with randomized dates between the start and end dates you provided.

6. After the script finishes, it will automatically push the commits to your remote repository.

## Important Notes

- This script modifies your Git history and pushes changes to your remote repository. Use it with caution and only on repositories where it's safe to do so.
- The script updates and commits changes to a file named `data.json` in your project directory.
- Ensure you have the necessary permissions to push to the remote repository.
