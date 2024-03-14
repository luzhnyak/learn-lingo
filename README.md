# Medicine Delivery

## Description

Medicine Delivery is an online platform for purchasing medicines from various pharmacies. Users can browse through different pharmacies and their available medicines, add them to their cart, and place orders.

[Frontend](https://github.com/luzhnyak/medicine-delivery-app)
[Backend](https://github.com/luzhnyak/medicine-delivery-backend)
[Live page](https://luzhnyak.github.io/medicine-delivery-app/)

## Features

- **Browse Medicines**: Users can view a list of available medicines from different pharmacies.
- **Add to Cart**: Users can add medicines to their shopping cart for purchase.
- **Order Placement**: Users can fulfill order details such as name, email, phone, and address to place orders.
- **Cart Management**: Users can manage their shopping cart by deleting items, increasing or decreasing quantities, and viewing the total price.

## Technologies Used

### Frontend

- **TypeScript**: A statically typed superset of JavaScript for improving development and catching errors early.
- **React**: Frontend framework for building the user interface.
- **React Router**: For routing within the application.
- **Redux Toolkit**: State management library for managing the application's state.
- **React Toastify**: For displaying toast notifications.
- **Axios**: Promise-based HTTP client for making requests to the backend.
- **Bootstrap**: CSS framework directed at responsive, mobile-first front-end web development.

### Backend

- **Node.js**: Backend runtime environment for executing JavaScript code.
- **Express.js**: Web application framework for building APIs.
- **MariaDB**: Relational system of databases.
- **Sequelize**: ORM for Node.js based on a deferred computation strategy (promise).
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: For loading environment variables from a .env file.
- **morgan**: HTTP request logger middleware for logging incoming requests.
- **Joi**: For validating request data.
- **Nodemon**: Utility for automatically restarting the server during development.

## Setup Instructions

1. Clone the repository.
2. Install dependencies for both frontend and backend using `npm install`.
3. Create a `.env` file in the backend directory and set up environment variables.
4. Start the backend server using `npm run dev` or `npm run dev`.
5. Start the frontend development server using `npm run dev`.

## Deployment

The frontend is deployed using GitHub Pages, while the backend can be deployed to a hosting provider like Heroku, Render, Cyclic or AWS.

If you want to deploy frontend using GitHub Pages, then follow further steps:

1. Install the gh-pages package as a development dependency: `npm install gh-pages --save-dev`.
2. Set homepage in package.json: `"homepage": "https://username.github.io/repository-name"`,
3. Deploy project using `npm run deploy`.

## Contributors

- [Oleh Luzhniak](https://github.com/luzhnyak)
