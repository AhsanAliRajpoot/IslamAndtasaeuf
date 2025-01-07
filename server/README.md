Following is the folder structure:

project-root/
│
├── src/
│ ├── config/ # Configuration files (e.g. database setup)
│ │ ├── db.ts # Database connection logic
│ │ └── index.ts # Centralized configuration export
│ │
│ ├── controllers/ # Express route controllers (business logic)
│ │ ├── userController.ts # Example controller for user-related routes
│ │ └── index.ts # Export all controllers
│ │
│ ├── models/ # Database models (TypeORM, Sequelize, or custom ORM logic)
│ │ ├── user.ts # Example user model
│ │ └── index.ts # Central export for models
│ │
│ ├── routes/ # Express route definitions
│ │ ├── userRoutes.ts # User-related routes
│ │ └── index.ts # Combine all routes
│ │
│ ├── services/ # Business logic and reusable utilities
│ │ ├── userService.ts # Example service for user operations
│ │ └── index.ts # Export all services
│ │
│ ├── middlewares/ # Custom Express middlewares
│ │ ├── errorHandler.ts # Middleware for handling errors
│ │ ├── authMiddleware.ts # Middleware for authentication
│ │ └── index.ts # Export all middlewares
│ │
│ ├── scripts/ # Scripts for database initialization or seeding
│ │ ├── db/
│ │ │ ├── initialize_db.sh # Script for database setup
│ │ │ └── seed.ts # TypeScript file for seeding data
│ │ └── index.ts # Script entry point
│ │
│ ├── utils/ # Utility functions and helpers
│ │ ├── logger.ts # Logging utility
│ │ └── index.ts # Export all utilities
│ │
│ ├── app.ts # Express app setup
│ └── server.ts # Server startup file
│
├── .env # Environment variables
├── .env.example # Example environment variables
├── .eslintrc.js # ESLint configuration
├── .gitignore # Ignored files and folders
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation
