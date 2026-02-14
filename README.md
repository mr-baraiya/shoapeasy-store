# ShopEasy - E-commerce Platform

🔗 **Live Preview:** [https://shopeasy-store.netlify.app/](https://shopeasy-store.netlify.app/)

A modern e-commerce web application built with React and Vite. The platform features user authentication, product browsing with protected routes, integrated payment processing via Razorpay, and custom clothing design request functionality through EmailJS.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Key Technologies](#key-technologies)
- [Application Flow](#application-flow)
- [Security Considerations](#security-considerations)

## Features

**Authentication System**
- User registration with form validation
- User login with persistent sessions (localStorage)
- Protected routes requiring authentication
- Automatic redirect to login for restricted pages

**Product Management**
- Product browsing with category filtering
- Product detail views with image galleries
- Add to cart functionality
- Real-time cart count updates

**Payment Integration**
- Razorpay payment gateway integration
- Automatic USD to INR currency conversion
- Secure payment processing with order tracking
- Payment success/failure handling

**Custom Design Requests**
- Custom clothing design form
- EmailJS integration for request submissions
- Detailed specification fields (type, size, color, design)
- Email notifications to business team

**User Experience**
- Landing page with feature highlights
- Responsive design for all devices
- Smooth animations with Framer Motion
- Toast notifications for user feedback
- Modern gradient-based UI design

## Prerequisites

Before installing, ensure you have the following:

- Node.js version 16.x or higher
- npm (comes with Node.js) or yarn package manager
- Git for version control

**Third-party Service Accounts:**
- Razorpay account with API credentials (for payment processing)
- EmailJS account with configured service and template (for contact forms)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend_vscode
```

2. Install all dependencies:
```bash
npm install
```

## Environment Configuration

All sensitive credentials and configuration values are stored in environment variables.

### Setup Steps

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Open `.env` and configure the following variables:

**Razorpay Configuration**
```
VITE_RAZORPAY_KEY_ID=your_actual_razorpay_key_id
VITE_RAZORPAY_TEST_MODE=true
```
Obtain from: https://dashboard.razorpay.com/app/keys

**Test Mode:**
- Set `VITE_RAZORPAY_TEST_MODE=true` for testing with test cards
- Use test key (starts with `rzp_test_`) for development
- Switch to live key (starts with `rzp_live_`) for production and set `VITE_RAZORPAY_TEST_MODE=false`

**Test Card Details (when in test mode):**
- Card Number: `4111 1111 1111 1111` (Visa)
- Alternative: `5555 5555 5555 4444` (Mastercard)
- Expiry: Any future date
- CVV: Any 3 digits
- Cardholder: Any name

**EmailJS Configuration**
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
Obtain from: https://dashboard.emailjs.com/admin

**Currency Conversion**
```
VITE_USD_TO_INR_RATE=83
```
Update this periodically based on current exchange rates.

### EmailJS Setup Instructions

1. Create an account at https://www.emailjs.com/
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with the following template parameters:
   - `full_name` - Customer's full name
   - `email` - Customer's email address
   - `phone` - Customer's phone number
   - `clothing_type` - Type of clothing (T-shirt, Hoodie, etc.)
   - `size` - Size selection (S, M, L, XL, etc.)
   - `preferred_color` - Customer's color preference
   - `design_preferences` - Design description
   - `additional_details` - Additional message or notes
4. Copy the Service ID, Template ID, and Public Key to your `.env` file

**Example Email Template Structure:**
```
New Custom Clothing Request

Customer Information
Full Name: {{full_name}}
Email Address: {{email}}
Phone Number: {{phone}}

Clothing Details
Clothing Type: {{clothing_type}}
Size: {{size}}
Preferred Color: {{preferred_color}}
Design Preferences: {{design_preferences}}
Additional Details: {{additional_details}}

Submitted via your website Custom Clothing Form
```

### Razorpay Setup Instructions

1. Sign up at https://razorpay.com/
2. Complete KYC verification (for production)
3. Navigate to Settings > API Keys
4. Generate test/live keys
5. Copy the Key ID to your `.env` file

## Running the Application

**Development Mode**
```bash
npm run dev
```
Starts the Vite development server at http://localhost:5173

**Production Build**
```bash
npm run build
```
Creates optimized production build in the `dist/` directory

**Preview Production Build**
```bash
npm run preview
```
Serves the production build locally for testing

**Linting**
```bash
npm run lint
```
Runs ESLint to check code quality

## Project Structure

```
frontend_vscode/
├── src/
│   ├── components/
│   │   ├── FeatureCard.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProtectedRoute.jsx      # Route authentication wrapper
│   │   └── ThreeScene.jsx
│   ├── context/
│   │   ├── AuthContext.jsx          # Authentication state management
│   │   └── CartContext.jsx          # Shopping cart state management
│   ├── data/
│   │   └── products.js              # Product catalog data
│   ├── pages/
│   │   ├── Cart.jsx                 # Shopping cart page (protected)
│   │   ├── Contact.jsx              # Custom design request form
│   │   ├── Home.jsx                 # Landing page
│   │   ├── ProductDetail.jsx        # Product details page (protected)
│   │   ├── Shop.jsx                 # Product listing page (protected)
│   │   ├── SignIn.jsx               # User login
│   │   └── SignUp.jsx               # User registration
│   ├── utils/
│   │   └── razorpay.js              # Payment gateway integration
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles
├── .env                             # Environment variables (git-ignored)
├── .env.example                     # Environment variable template
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Key Technologies

**Core Framework**
- React 19.1.1 - Component-based UI library
- Vite 7.1.2 - Fast build tool and development server

**Styling & UI**
- TailwindCSS 4.1.13 - Utility-first CSS framework
- Framer Motion 12.23.12 - Animation library
- Lucide React 0.564.0 - Icon library

**State Management & Routing**
- React Router DOM 7.8.2 - Client-side routing with protected routes
- React Context API - Global state for auth and cart

**Payment & Communication**
- Razorpay 2.9.6 - Payment gateway integration
- EmailJS-com 3.2.0 - Email service for contact forms

**Form Handling & Validation**
- React Hook Form 7.62.0 - Form state management
- SweetAlert2 11.23.0 - Custom alerts and confirmations
- React Toastify 11.0.5 - Toast notifications

**Additional Libraries**
- Three.js 0.182.0 - 3D graphics library
- GSAP 3.14.2 - Animation library
- Axios 1.11.0 - HTTP client

## Application Flow

### User Journey

1. **Landing Page** (`/`)
   - Visitors see the home page with product highlights
   - Options to sign in or create an account
   - Public access to custom design form

2. **Authentication**
   - Sign Up: Register new account with name, email, password
   - Sign In: Login with existing credentials
   - Sessions persist in localStorage

3. **Protected Shopping**
   - After login, users gain access to:
     - Shop page with product catalog
     - Individual product detail pages
     - Shopping cart

4. **Shopping Cart & Checkout**
   - Add products to cart from shop or product detail pages
   - View cart summary with quantities and totals
   - Proceed to Razorpay payment gateway
   - Order confirmation after successful payment

5. **Custom Design Requests**
   - Accessible to all users (no authentication required)
   - Form submission triggers email via EmailJS
   - Business receives design specifications

### Route Protection

Protected routes redirect unauthenticated users to `/signin`:
- `/shop` - Product catalog
- `/product/:id` - Product details
- `/cart` - Shopping cart

Public routes accessible to all:
- `/` - Landing page
- `/signin` - Login page
- `/signup` - Registration page
- `/contact` - Custom design form

## Security Considerations

**Environment Variables**
- Never commit the `.env` file to version control
- The `.env` file is included in `.gitignore` by default
- Use `.env.example` as a template for required variables
- All sensitive credentials use the `VITE_` prefix for Vite access

**Authentication**
- User passwords stored in localStorage (client-side only)
- In production, implement server-side authentication with hashed passwords
- Current implementation is suitable for development/demonstration purposes

**API Keys**
- Razorpay Key ID is safe to expose on client-side
- Keep Razorpay Key Secret on server-side only (not included in this frontend)
- EmailJS Public Key is designed for client-side use

**Best Practices**
- Rotate API keys periodically
- Use test keys during development
- Switch to production keys only after thorough testing
- Monitor API usage in service dashboards
