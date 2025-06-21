# Netflix Clone

A modern Netflix clone built with React, TypeScript, and Firebase, featuring user authentication, responsive design, and a clean UI.

## 🚀 Features

### ✅ Implemented Features

#### Authentication System
- **Sign In/Sign Up Forms** with email and password
- **Form Validation** with real-time error messages
- **Firebase Authentication** integration
- **User Profile Management** with display name and photo
- **Automatic Redirect** to browse page after successful authentication
- **Sign Out** functionality

#### User Interface
- **Responsive Design** using Tailwind CSS
- **Netflix-like Header** with logo and user profile
- **Background Video/Image** on login page
- **Modern Form Design** with proper styling
- **Error Handling** with user-friendly messages

#### State Management
- **Redux Toolkit** for global state management
- **User State Management** with Redux slices
- **Persistent Authentication** state

#### Routing
- **React Router DOM** for navigation
- **Protected Routes** (browse page requires authentication)
- **Automatic Route Protection** based on auth state

### 🚧 Planned Features

- **Browse Page Content**
  - Movie trailer in background
  - Movie title and description
  - Movie suggestions and lists
- **Search Functionality**
  - Search bar implementation
  - Movie search results
- **ChatGPT Integration**
  - AI-powered movie suggestions
  - Interactive movie recommendations

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Tailwind CSS 4.1.10** - Styling
- **React Router DOM 7.6.2** - Routing
- **Redux Toolkit 2.8.2** - State management
- **React Redux 9.2.0** - React-Redux integration

### Backend & Services
- **Firebase 11.9.1** - Authentication and backend services
- **Firebase Auth** - User authentication
- **Firebase Analytics** - Analytics tracking

### Development Tools
- **Vite 6.3.5** - Build tool and dev server
- **ESLint 8.56.0** - Code linting
- **Prettier 3.5.3** - Code formatting
- **Husky 9.1.7** - Git hooks
- **Vitest 3.2.3** - Testing framework
- **TypeScript ESLint** - TypeScript linting

## 📁 Project Structure

```
src/
├── components/
│   ├── Body.tsx          # Main app router and auth state management
│   ├── Browse.tsx        # Browse page (placeholder)
│   ├── Header.tsx        # Navigation header with logo and user menu
│   └── Login.tsx         # Authentication forms (Sign In/Sign Up)
├── utils/
│   ├── appStore.ts       # Redux store configuration
│   ├── firebase.js       # Firebase configuration and initialization
│   ├── userSlice.ts      # Redux slice for user state management
│   └── validate.ts       # Form validation utilities
├── App.tsx               # Main app component with Redux provider
└── main.tsx              # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password provider
   - Copy your Firebase config to `src/utils/firebase.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run type-check` - Check TypeScript types
- `npm run clean` - Clean build artifacts

## 🔧 Configuration

### Firebase Configuration
The app uses Firebase for authentication. Make sure to:
1. Create a Firebase project
2. Enable Email/Password authentication
3. Update the Firebase config in `src/utils/firebase.js`

### Environment Variables
Create a `.env` file in the root directory for any environment-specific variables.

## 🧪 Testing

The project includes testing setup with Vitest and React Testing Library:
```bash
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

## 📦 Build and Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Netflix for the design inspiration
- Firebase for authentication services
- React and TypeScript communities for excellent documentation 