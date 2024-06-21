# Admin Dashboard for Library Management

## Description

This project is an admin dashboard for managing a library system. It allows administrators to manage books, members (anggotas), and borrowing transactions. Built using Node.js, Express, Sequelize, and Handlebars, this application provides a user-friendly interface for managing library operations.

## Features

- User authentication and session management for administrators.
- CRUD operations for books and members.
- Borrowing transactions management.
- Responsive design using Bootstrap.
- Data seeding for initial setup.

## Setup

### Prerequisites

- Node.js (>= 12.0.0)
- npm (>= 6.0.0)
- MySQL database

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/admin-dashboard-library.git
    cd admin-dashboard-library
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure the database:

    - Create a MySQL database for the project.
    - Update the `config/config.json` file with your database credentials.

4. Run migrations and seeders to set up the database schema and initial data:

    ```bash
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

5. Start the server:

    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to access the admin dashboard.

## Usage

### Running the Server

To run the server, use:

```bash
npm start
