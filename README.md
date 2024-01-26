# Trello Organizer Web App

This web application is designed to organize personal projects using the Trello API as the backend and ReactJS as the frontend development framework.

## Project Description

The purpose of this application is to allow users to efficiently manage their projects using the functionality provided by Trello. The application enables listing all boards, displaying lists and cards associated with a selected board, creating new cards by specifying only the name, and dragging and dropping cards between lists.

## Features

- List all available boards.
- Show lists and cards associated with a selected board.
- Create new cards by specifying only the name.
- Drag and drop functionality to move cards between lists (optional).

## Technologies Used

- ReactJS
- React Query for data fetching and caching.
- Axios for making calls to the Trello API.
- React Router for routing.
- Tailwind CSS for styling.
- Zustand for state management.
- Shadcn for custom components.
- React Beautiful DnD for drag and drop functionality (optional).

## Trello API Setup

To use the application, follow these steps:

1. Sign up on [Trello](https://trello.com) for free.
2. Get the API key and token by following the instructions at [https://trello.com/app-key](https://trello.com/app-key).
3. Replace `[key]` and `[token]` in the API calls with your actual key and token values.

## Installation and Usage

1. Clone the repository: `git clone [repository-url]`
2. Install dependencies: `pnpm install`
3. Start the application: `pnpm run dev`

## Project Structure

- `src/components`: Contains reusable components.
- `src/pages`: Contains page-specific components.
- `src/utils`: Contains utilities and helper functions.
