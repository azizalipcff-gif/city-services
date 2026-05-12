# CityServices - Premium Local Services Marketplace

A comprehensive premium local services web platform for Moroccan cities, starting with Oujda. Built with modern web technologies for an exceptional user experience and scalable startup architecture.

## 🚀 Features

### Core Platform Features
- **Modern Dark Premium Theme**: Elegant dark navy background with gold accents
- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for premium UX
- **Advanced Search & Filter System**: Search by category, city, business name with filters
- **Category-Based Navigation**: Explore PC repair, WiFi, phone repair, restaurants, and more
- **Business Profiles**: Detailed business information with galleries, reviews, and contact options
- **Authentication System**: Complete Supabase-powered auth with role-based access
- **User & Business Dashboards**: Comprehensive management interfaces
- **Admin Panel**: Business approval and platform management

### Advanced Features
- **Toast Notifications**: Real-time feedback system
- **Floating Actions**: WhatsApp integration and back-to-top button
- **Scroll Animations**: Elements animate into view as you scroll
- **Skeleton Loading**: Smooth loading states for better UX
- **Mobile Bottom Navigation**: Native mobile app-like experience
- **SEO Optimized**: Complete meta tags, semantic HTML, and clean URLs
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lazy loading, optimized images, and fast loading

### Business Features
- **Verified Badges**: Trust indicators for verified businesses
- **Rating & Review System**: 5-star rating with detailed reviews and helpful votes
- **Contact Integration**: Direct WhatsApp, phone, and location links
- **Business Hours**: Real-time open/closed status
- **Photo Galleries**: Showcase business images and services
- **Add Business System**: Complete form with image uploads and admin approval

### User Roles & Permissions
- **Regular Users**: Search, review, favorite businesses, view profiles
- **Business Owners**: Manage businesses, view analytics, respond to reviews
- **Admin**: Approve businesses, manage content, view platform analytics

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom premium theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Authentication & Database**: Supabase
- **State Management**: React Hooks & Context API
- **Form Handling**: React useState with validation

## 📱 Pages & Components

### Main Pages
- **Home**: Hero section with stats, categories, featured businesses, testimonials
- **Business Details**: Individual business profiles with reviews and contact
- **Authentication**: Login, Register, Forgot Password with role selection
- **User Dashboard**: Saved businesses, reviews, favorites, notifications
- **Business Dashboard**: Business management, analytics, reviews, settings
- **Add Business**: Complete form with image uploads and validation

### Key Components
- **Navbar**: Responsive navigation with auth state
- **Hero**: Animated search with statistics
- **FeaturedBusinesses**: Premium business cards with realistic data
- **Footer**: Comprehensive links, newsletter, contact info
- **Toast**: Notification system
- **ProtectedRoute**: Role-based access control

## 📱 Pages & Components

### Main Pages
- **Home**: Hero section, categories, featured businesses, testimonials
- **Business Details**: Individual business profiles with reviews
- **Authentication**: Login, Register, Forgot Password
- **Dashboards**: User and Business management interfaces

### Key Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with newsletter and social links
- **Hero**: Advanced search with statistics
- **Categories**: Interactive category grid with icons
- **FeaturedBusinesses**: Showcase top-rated businesses
- **Toast System**: Notification management
- **Floating Actions**: WhatsApp and back-to-top buttons
- **Bottom Navigation**: Mobile-optimized navigation
- **Scroll Animation**: Intersection Observer animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Supabase account for backend services

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ljadid
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Set up Supabase Database**
   Create the following tables in your Supabase project:
   - `users` (id, name, email, role, created_at)
   - `businesses` (id, owner_id, name, category, description, city, address, phone, whatsapp, logo, cover_image, gallery, verified, rating, views, created_at)
   - `reviews` (id, business_id, user_id, rating, comment, created_at)
   - `favorites` (id, user_id, business_id)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Businesses Table
```sql
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  city TEXT,
  address TEXT,
  phone TEXT,
  whatsapp TEXT,
  logo TEXT,
  cover_image TEXT,
  gallery JSONB,
  verified BOOLEAN DEFAULT FALSE,
  rating DECIMAL(2,1) DEFAULT 0,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Reviews Table
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  user_id UUID REFERENCES users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Favorites Table
```sql
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  business_id UUID REFERENCES businesses(id),
  UNIQUE(user_id, business_id)
);
```

## 🎯 User Roles

### Regular Users
- Browse and search businesses
- View business details and reviews
- Save favorite businesses
- Write and read reviews
- Contact businesses directly

### Business Owners
- Add and manage multiple businesses
- View business analytics and insights
- Respond to customer reviews
- Update business information
- Access premium features

### Admin Users
- Approve/reject business submissions
- Manage platform content
- View global analytics
- Moderate reviews and content
- Access admin dashboard

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📈 Roadmap

- [ ] Advanced search filters and sorting
- [ ] Real-time chat between users and businesses
- [ ] Payment integration for premium listings
- [ ] Mobile app development
- [ ] Multi-city expansion
- [ ] Advanced analytics dashboard
- [ ] API for third-party integrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or support, please contact:
- Email: info@cityservices.ma
- Website: https://cityservices.ma

---

Made with ❤️ for Moroccan communities
```

## 🎨 Design System

### Colors
- **Primary**: `#071126` (Dark Navy)
- **Accent**: `#d4af37` (Gold)
- **Text**: `#ffffff` (White)
- **Muted**: `#b0b0b0` (Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations
- **Duration**: 0.3s - 0.8s
- **Easing**: Custom cubic-bezier curves
- **Triggers**: Hover, scroll, page load

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture

## 🌟 Key Improvements Made

1. **Premium UI/UX**: Enhanced dark theme with gold accents
2. **Mobile Optimization**: Bottom navigation and responsive design
3. **Performance**: Optimized loading and animations
4. **SEO**: Complete meta tags and semantic HTML
5. **Accessibility**: Proper ARIA labels and keyboard support
6. **User Experience**: Toast notifications, loading states, smooth transitions

## 📈 Future Enhancements

- [ ] Advanced search with filters and sorting
- [ ] Real-time chat system
- [ ] Payment integration
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics dashboard

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please contact us at info@cityservices.ma
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Categories.tsx  # Service categories
│   ├── FeaturedBusinesses.tsx  # Business listings
│   ├── WhyChooseUs.tsx # Advantages section
│   ├── Testimonials.tsx # User reviews
│   └── Footer.tsx      # Footer
├── pages/              # Page components
│   └── Home.tsx        # Main homepage
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Cities Supported

- **Oujda** (Current)
- More cities coming soon...

## Contributing

This platform is designed for easy expansion to new cities and services.

## License

© 2024 CityServices. All rights reserved.
