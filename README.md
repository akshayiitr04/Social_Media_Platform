# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

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

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Social Media Platform
A full-stack social media platform built with a robust backend using Appwrite, and a dynamic frontend utilizing ShadCN UI, React Hook Form, and Zod schema for form validation. The application features reusable components and TanStack Query for asynchronous tasks and state management. This platform includes functionalities such as user authentication, CRUD operations for posts, an explore page, and a home page.

## Table of Contents
Features
Technologies Used
Installation
Usage
Contributing
Contact
Features

User Authentication (Sign Up, Sign In)

Create, Read, Update, and Delete (CRUD) Posts

Explore Page to Discover New Content

Home Page with Personalized Feed

Reusable Components for UI Elements

Form Validation with Zod

State Management with TanStack Query

## Technologies Used
Backend: Appwrite
Frontend: React, ShadCN UI, React Hook Form, Zod
State Management: TanStack Query
Other Libraries: React Router, Axios
Installation
Backend Setup

## Install Appwrite: Follow the official Appwrite installation guide.
Setup Appwrite Project:
Create a new project in the Appwrite console.
Create necessary databases and collections for user data and posts.
Frontend Setup


## User Authentication
Sign Up: Navigate to the Sign Up page, fill out the form, and submit.
Sign In: Navigate to the Sign In page, enter your credentials, and submit.
Post Management
Create Post: Use the form on the home page or a dedicated page to create a new post.
Read Posts: Browse posts on the home page or explore page.
Update Post: Edit your existing posts by navigating to the post detail and clicking on the edit button.
Delete Post: Remove your posts by clicking the delete button on the post detail.
Form Validation
Sign Up/Sign In Forms: Utilize React Hook Form and Zod for schema validation to ensure data integrity.
Post Forms: Reusable form components with validation logic encapsulated.
Contributing
Contributions are welcome! Please follow these steps to contribute:

## Fork the repository.
Create a new feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.

