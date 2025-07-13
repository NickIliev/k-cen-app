# Happy Kids Center Website

A modern, responsive React website for a children's daycare and learning center. Built with Vite for fast development and optimized performance.

## Features

### 🏠 Landing Page
- Hero section with compelling call-to-action
- About section highlighting center benefits
- Program overview for different age groups
- Parent testimonials
- Quick enrollment prompts

### 🖼️ Gallery
- Virtual facility tour with placeholder areas
- Daily activities showcase
- Photo policy information
- Tour scheduling integration

### 💰 Pricing
- Clear pricing structure for all programs
- Age group categorization with staff ratios
- Additional services and fees
- Financial assistance information
- Family discounts and payment options

### 📞 Contact
- Contact form with inquiry types
- Staff directory with leadership team
- FAQ section for common questions
- Emergency contact information
- Multiple contact methods

### 📝 Reservations
- Multi-step enrollment process
- Parent and child information collection
- Program selection with scheduling
- Tour request integration
- Form validation and success feedback

## Technology Stack

- **Frontend**: React 18 with JSX
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Custom CSS with responsive design
- **Form Handling**: Controlled components with validation
- **Icons**: Unicode emojis for visual appeal

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kids-center-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Gallery.jsx     # Gallery/virtual tour
│   ├── Pricing.jsx     # Pricing information
│   ├── Contact.jsx     # Contact form and info
│   └── Reservations.jsx # Enrollment form
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Customization

### Colors
The website uses a bright, kid-friendly color palette:
- Primary: `#ff6b6b` (coral)
- Secondary: `#4ecdc4` (turquoise)
- Accent: `#667eea` (purple)
- Warning: `#ffe66d` (yellow)

### Content
All content is easily customizable by editing the respective page components. Key areas to update:

1. **Contact Information**: Update in `Contact.jsx` and `Footer.jsx`
2. **Pricing**: Modify pricing plans in `Pricing.jsx`
3. **Programs**: Update program details in `Home.jsx` and `Pricing.jsx`
4. **Gallery**: Replace placeholder content in `Gallery.jsx`

### Styling
- Responsive design with mobile-first approach
- CSS Grid and Flexbox for layouts
- Smooth transitions and hover effects
- Accessibility-focused design patterns

## Development Guidelines

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Navbar.jsx`
4. Add footer link if needed in `Footer.jsx`

### Form Handling
- Use controlled components for all form inputs
- Implement proper validation
- Provide user feedback for form submissions
- Handle loading and error states

### Responsive Design
- Test on mobile devices and various screen sizes
- Use relative units (rem, %, vw/vh) where appropriate
- Implement touch-friendly interface elements
- Ensure text readability on all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on different devices
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this project, please contact:
- Email: developer@happykidscenter.com
- Website: https://happykidscenter.com

---

Built with ❤️ for the Happy Kids Center community
