# Technical Challenge React Template

This repository provides a minimal, modern React application template using Vite and TypeScript. It is designed for rapid development and demonstration of scalable front-end techniques, especially for image-heavy or virtualized UIs.

## Features

- **React + TypeScript**: Strongly typed components and data structures.
- **Vite**: Lightning-fast development server, optimized bundling, and Hot Module Replacement (HMR).
- **Virtualized Photo Gallery**: Efficiently renders large lists of images from the [Picsum Photos API](https://picsum.photos/).
- **Authentication Context**: Boilerplate for user login/logout and authenticated state management.
- **ESLint**: Pre-configured for code quality, with recommendations for React, React Hooks, and TypeScript.
- **Tailwind CSS**: Utility-first CSS for rapid UI development (via plugin).
- **Axios Client**: Pre-configured HTTP client with token-based authorization support.

## Getting Started

### Prerequisites

- Node.js (>=18)
- npm or yarn

### Installation

```bash
git clone https://github.com/sggrenas2/technical_challenge.git
cd technical_challenge
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

in order to log in you can to look this [https://dummyjson.com/users](https://dummyjson.com/users) it get a lot of valid users to use

### Building for Production

```bash
npm run build
# or
yarn build
```

Built files will be output to the `dist/` directory.

## Project Structure

```
technical_challenge/
├── src/
│   ├── components/         # React components (PhotoGallery, PhotoCard, etc.)
│   ├── context/            # React Context (AuthContext)
│   ├── Hooks/              # Custom hooks (useAuth)
│   ├── lib/                # Pre-configured Axios client
│   ├── services/           # Data fetching/aggregation services
│   ├── types/              # TypeScript interfaces and types
│   ├── utils/              # Utility functions (API calls, etc.)
│   ├── Routes/             # Centralized routes management
│   ├── Views/              # Centralized views management
│   ├── index.css           # App-wide CSS (includes Tailwind)
│   └── main.tsx            # App entry point
├── vite.config.ts          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
└── README.md               # This file
```

## Main Functionality

- **Photo Gallery**: Fetches images from the Picsum Photos API across multiple pages, merges them, and displays them using a virtualized list for performance. Each image can be downloaded by users.
due to api limitations (just handle 100 photos per request) i have to create an utility function that calls the endpoint 20 times to get the 2000 items required on the test

- **Authentication**: Includes a React Context and hook for managing authentication state, with sample interfaces for user data.

here i use [https://dummyjson.com/](https://dummyjson.com/) to login users. photo gallery will load without need the token, but a small component call "ProfileCard" neer to be authorized to get the user info

- **Linting and Formatting**: Ready-to-use ESLint setup for both JavaScript and TypeScript, with recommended rules for React projects.

## Challenge Requirements & Repository Response
1. Login Screen with Fake Login (200-OK + fake token)
Challenge: A login screen is required, accepting email and password, performing a fake login, receiving a "token-fake".
**Repo**: The project implements an AuthContext and useAuth hook for authentication logic. The login process is simulated (fake login) and the token is stored in memory (not persisted), matching the requirement for in-memory token storage.
2. Home Screen Connecting to Public API and Showing 2000 Elements
Challenge: The home screen must fetch and display a list of 2000 items from a public API.
**Repo**: The app uses the Picsum Photos API to fetch images. It cleverly fetches 20 pages of 100 images each (totaling 2000 elements), merges them, and displays them in the home screen.
3. Logout Button that Returns to Login and Clears Session
Challenge: There must be a logout button that returns the user to the login screen and clears the session.
**Repo**: The logout function is included in the AuthContext, clearing the authentication state and thus returning the user to the login page and invalidating the session.
4. Responsive React + TypeScript App (Web & Mobile)
Challenge: The application must be responsive and built with React and TypeScript.
**Repo**: The project uses React with TypeScript, and styles are handled with Tailwind CSS, which provides responsive utilities for both web and mobile layouts.
5. Styling
Challenge: The choice of CSS libraries is left up to the developer.
**Repo**: Tailwind CSS is used for styling, enabling rapid and responsive design.
6. README and Documentation
Challenge: The repo must include a README with setup instructions and documentation.
**Repo**: The current README includes setup steps, dependencies, and explanations. (Your request above will further improve it.)
7. Token Storage in Memory
Challenge: The token must be stored in memory and not persisted.
**Repo**: The token is held in React context, which is in-memory only (not localStorage/sessionStorage).
8. Public/Private Context Architecture
Challenge: Must provide a scalable architecture with public (login) and private (home) areas, anticipating further modules.
**Repo**: The app uses React Context to manage authentication and route protection, separating public and private views. The structure allows easy addition of modules like password change (public) or user data (private).
9. Axios for Fetching, Configured with Token
Challenge: Axios must be used for API requests, with the fake token set on requests.
**Repo**: Axios is wrapped in a custom client that attaches the (fake) token to each request header, even if not strictly required by the public API.
10. Efficient List Rendering Strategy
Challenge: Must argue for and implement an efficient way to show the 2000-item list.
**Repo**: The app uses virtualization (@tanstack/react-virtual) in the Photo Gallery to efficiently render only the visible portion of the list. This is the best practice for large lists in React and is correctly argued as the most performant and user-friendly approach.
11. Logout Strategy with Context
Challenge: The logout logic must be coherent with the context-based architecture.
**Repo**: Logout is handled via context, resetting the authentication state, which is a scalable and standard approach in React apps.
12. Backend Call Efficiency Improvement Proposal
Challenge: Must propose a theoretical improvement for backend calls.
**Repo**: The current implementation fetches 20 pages in parallel to aggregate 2000 images. this behaviors is for the challenge restriction to render 2000 items at once, but to improve the backend the best option is to create a server paginated endpoint that allows the front to call less items per call (the api used works with this pagination) and to avoid an overload on backend implements a cache to easily respond duplicate calls 