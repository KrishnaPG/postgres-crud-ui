# Postgres-CRUD-Ui

This project is built with [Admin.js](https://github.com/SoftwareBrothers/adminjs) + [Prisma](https://www.prisma.io/docs) to demonstrate the dynamic CRUD UI creation for Postgres backend without having to declare the resources manually one-by-one. All tables in the Postgres will be available for the CRUD operations.

## How to run

  1. Install the dependencies with `npm install`
  2. Copy the `.env.example` file to `.env` file and adjust the settings.
  3. Create the tables and databases in the Postgres with `npm run db:push` command.
  4. Seed the sample data with `npm run db:seed` command.
  5. Build the source with `npm run build` command.
  6. Launch the app with `npm run start` command.
    - username: `admin@example.com` 
    - password: password
     
## Screenshot
![image](https://github.com/user-attachments/assets/0dbc4b73-9db1-4996-9b23-2d7babcb6e42)
