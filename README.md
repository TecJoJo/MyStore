# MyStore - E-commerce Frontend

A modern e-commerce web application built with React, TypeScript, and Redux Toolkit. This is the frontend client that works in conjunction with the [MyStore Backend](https://github.com/TecJoJo/MyStore_backend).

## 🚀 Features

### 🔐 Authentication System

- **User Login/Logout**: JWT-based authentication with secure token storage
- **Protected Routes**: Admin dashboard accessible only to authenticated users
- **Persistent Sessions**: Automatic login state restoration from localStorage

### 🛒 Shopping Cart

- **Dynamic Cart Management**: Add, remove, and update item quantities
- **Real-time Total Calculation**: Automatic price calculation with quantity updates
- **Smart Delivery Pricing**:
  - €9.99 for orders under €29
  - €3.99 for orders €29-€49.99
  - Free delivery for orders €50+
- **Sliding Cart Panel**: Toggle cart visibility

### 🎨 User Interface

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Navigation**: Clean navigation bar with active link highlighting
- **Loading States**: Spinner component for async operations
- **Hero Landing Page**: Under construction notice with appealing visuals

### 🏗️ Architecture

- **Redux Toolkit**: Centralized state management with RTK slices
- **React Router**: Client-side routing with protected routes
- **TypeScript**: Full type safety across the application
- **Component-based**: Modular and reusable component structure

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.0** - UI library
- **TypeScript 5.8.2** - Type safety and developer experience
- **Vite** - Fast build tool and development server
- **React Router 6.30.1** - Client-side routing

### State Management

- **Redux Toolkit 2.6.1** - Predictable state container
- **React Redux 9.2.0** - React bindings for Redux

### Styling & UI

- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library

### HTTP Client

- **Axios 1.10.0** - Promise-based HTTP client

### Development Tools

- **ESLint 9.23.0** - Code linting
- **Prettier 3.5.3** - Code formatting

## 📁 Project Structure

```
src/
├── api/                          # API layer
│   └── authentication/
│       ├── loginApiRequest.ts    # Login API call
│       └── model.ts              # API data models
├── app/                          # Redux store configuration
│   ├── store.ts                  # Main store setup
│   ├── hooks.ts                  # Typed Redux hooks
│   ├── withTypes.ts              # Redux type utilities
│   └── createAppSlice.ts         # App-specific slice creator
├── components/                   # Reusable UI components
│   └── landingPage/
│       └── Hero.tsx              # Landing page hero section
├── features/                     # Feature-based modules
│   ├── authentication/          # Auth feature
│   │   ├── authenticationSlice.ts
│   │   ├── Login.tsx
│   │   ├── components/
│   │   │   └── LoadingSpinner.tsx
│   │   ├── models/               # Auth-related types
│   │   └── utils/                # Auth utilities
│   ├── cart/                     # Shopping cart feature
│   │   ├── cartSlice.ts
│   │   ├── Cart.tsx
│   │   ├── components/
│   │   │   └── ShoppingItem.tsx
│   │   └── utils/
│   │       └── constants.ts
│   ├── naviBar/                  # Navigation feature
│   │   ├── Navibar.tsx
│   │   └── components/
│   └── products/                 # Products feature (planned)
│       └── overview.md           # Feature planning docs
└── utils/                        # Global utilities
    └── test-utils.tsx            # Testing utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Backend server running (see [MyStore Backend](https://github.com/TecJoJo/MyStore_backend))

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd MyStore
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🔗 Backend Integration

This frontend application connects to the MyStore backend API:

- **Repository**: [MyStore Backend](https://github.com/TecJoJo/MyStore_backend)
- **Technology**: C# .NET Web API
- **Authentication**: JWT tokens
- **API Base URL**: `https://localhost:7172/api`

### API Endpoints Used

- `POST /api/auth/login` - User authentication

## 🎯 Current Status

**🚧 Under Construction**

This e-commerce application is currently in active development. Implemented features include:

✅ **Completed**

- User authentication system
- Shopping cart functionality
- Responsive navigation
- Basic routing structure
- Redux state management setup

🔄 **In Progress**

- Product catalog system
- Product filtering and search
- User profile management
- Order management

📋 **Planned Features**

- Product reviews and ratings
- Wishlist functionality
- Payment integration
- Order history
- Admin dashboard enhancements
- Multi-language support

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test -- --watch
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_API_BASE_URL=https://localhost:7172/api
```

### Build Configuration

The project uses Vite for building and bundling. Configuration is in `vite.config.ts`.

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features

## 📝 License

Copyright 2025 Yao Lu

All rights reserved.

Unauthorized copying, reproduction, distribution, modification, or use
of this code or any part of it is strictly prohibited without prior
written permission from the copyright holder.

## 👨‍💻 Author

**TecJoJo**

- GitHub: [TecJoJo](https://github.com/TecJoJo)
- Backend Repository: [MyStore Backend](https://github.com/TecJoJo/MyStore_backend)

## 🙏 Acknowledgments

- Built with [Vite React Redux Template](https://github.com/reduxjs/redux-templates)
- Inspired by [Redux Essentials Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)

---

**Note**: This project is part of a full-stack e-commerce solution. Make sure to also set up the [backend server](https://github.com/TecJoJo/MyStore_backend) for full functionality.
