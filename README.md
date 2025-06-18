# MyStore - E-commerce Frontend

A modern e-commerce web application built with React, TypeScript, and Redux Toolkit. This is the frontend client that works in conjunction with the [MyStore Backend](https://github.com/TecJoJo/MyStore_backend).

## 🚀 Features

### 🔐 Authentication System

- **User Login/Logout**: JWT-based authentication with secure token storage
- **Protected Routes**: Admin dashboard accessible only to authenticated users
- **Persistent Sessions**: Automatic login state restoration from localStorage
- **Loading States**: Visual feedback during authentication process with loading spinner
- **Error Handling**: Proper error states for failed authentication attempts

### 🛒 Shopping Cart

- **Dynamic Cart Management**: Add, remove, and update item quantities
- **Real-time Total Calculation**: Automatic price calculation with quantity updates
- **Smart Delivery Pricing**:
  - €9.99 for orders under €29
  - €3.99 for orders €29-€49.99
  - Free delivery for orders €50+
- **Sliding Cart Panel**: Toggle cart visibility with smooth animations
- **Item Details**: Display color, size, discount information, and images
- **Empty Cart State**: Elegant messaging when cart is empty
- **Quantity Controls**: Increment/decrement item quantities with instant feedback

### 📦 Product Catalog

- **Product Display**: Interactive grid layout with hover effects
- **Product Information**: Name, description, price, category, stock levels, and images
- **API Integration**: Real-time product data fetching from backend
- **Responsive Cards**: Mobile-friendly product display with smooth transitions
- **Image Optimization**: Proper alt text and responsive image handling

### 🎨 User Interface

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Navigation**: Clean navigation bar with active link highlighting and sign-out functionality
- **Loading States**: Spinner component for async operations
- **Hero Landing Page**: Under construction notice with appealing visuals and embedded product showcase
- **Smooth Animations**: Hover effects, transitions, and interactive feedback

### 🏗️ Architecture

- **Redux Toolkit**: Centralized state management with RTK slices for cart, authentication, and products
- **React Router**: Client-side routing with protected routes and navigation guards
- **TypeScript**: Full type safety across the application with proper interfaces
- **Component-based**: Modular and reusable component structure with feature-based organization

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

- **ESLint 9.23.0** - Code linting with TypeScript support
- **Prettier 3.5.3** - Code formatting
- **TypeScript ESLint 8.29.0** - TypeScript-specific linting rules

## 📁 Project Structure

```
src/
├── api/                          # API layer
│   ├── authentication/
│   │   ├── loginApiRequest.ts    # Login API call
│   │   └── models.ts             # Auth API data models
│   ├── Products/
│   │   ├── getAllProductsApiRequest.ts # Fetch all products
│   │   └── models.ts             # Product API data models
│   └── common/
│       └── models.ts             # Common API types and URLs
├── app/                          # Redux store configuration
│   ├── store.ts                  # Main store setup
│   ├── hooks.ts                  # Typed Redux hooks
│   ├── withTypes.ts              # Redux type utilities
│   └── createAppSlice.ts         # App-specific slice creator
├── components/                   # Reusable UI components
│   └── landingPage/
│       └── Hero.tsx              # Landing page hero section with products
├── features/                     # Feature-based modules
│   ├── authentication/          # Auth feature
│   │   ├── authenticationSlice.ts # Auth state management
│   │   ├── Login.tsx             # Login form component
│   │   ├── components/
│   │   │   └── LoadingSpinner.tsx # Loading indicator
│   │   ├── models/               # Auth-related types
│   │   └── utils/                # Auth utilities
│   ├── cart/                     # Shopping cart feature
│   │   ├── cartSlice.ts          # Cart state management
│   │   ├── Cart.tsx              # Cart panel component
│   │   ├── components/
│   │   │   └── ShoppingItem.tsx  # Individual cart item
│   │   └── utils/
│   │       └── constants.ts      # Cart constants and temp data
│   ├── naviBar/                  # Navigation feature
│   │   ├── Navibar.tsx           # Main navigation component
│   │   └── components/
│   └── products/                 # Products feature
│       ├── Products.tsx          # Product listing component
│       ├── productsSlice.ts      # Product state management
│       ├── overview.md           # Feature planning documentation
│       ├── components/
│       │   └── SingleProduct.tsx # Individual product card
│       └── utils/
│           └── getAllProductsResponseDtoToProductMap.ts # Data mapping utility
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
- `GET /api/products/allproducts` - Fetch all products

## 🎯 Current Status

**🚧 Under Construction**

This e-commerce application is currently in active development. Implemented features include:

✅ **Completed**

- **Authentication System**: Full JWT-based login/logout with persistent sessions
- **Shopping Cart**: Complete cart functionality with quantity management and smart delivery pricing
- **Product Catalog**: Basic product display with API integration and responsive design
- **Navigation**: Responsive navigation bar with conditional login/logout display
- **Redux State Management**: Complete setup with authentication, cart, and products slices
- **TypeScript Integration**: Full type safety across the

🔄 **In Progress**

- **Product Features**: Enhanced product filtering and search capabilities
- **Cart Integration**: Connect cart to backend API for persistence

📋 **Planned Features**

- **Advanced Search**: Filtering by category, price range, and attributes
- **Checkout Process**: Payment integration and order processing
- **User Profile Management**: Account settings and order history
- **Product Reviews**: Rating and review system
- **Wishlist Functionality**: Save products for later
- **Admin Dashboard**: Enhanced administrative features

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type checking
npm run type-check
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
