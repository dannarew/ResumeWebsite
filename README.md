# Hexagon Portfolio

A modern, interactive portfolio website featuring a dynamic hexagon navigation system. Built with React and deployed on GitHub Pages.

## Features

- Dynamic central hexagon that splits into 4 clickable regions on hover
- Smooth animations using Framer Motion
- Responsive design with a beautiful purple gradient background
- Four main sections: Home, About, Experience, and Contact
- Modern UI with glassmorphism effects
- Deployed automatically to GitHub Pages

## Technologies Used

- React
- React Router
- Framer Motion
- Emotion (Styled Components)
- Vite
- GitHub Pages

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hexagon-portfolio.git
cd hexagon-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
hexagon-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/                     # images, icons, background effects
│   │   ├── components/
│   │   │   ├── HexagonButton.jsx        # the animated hexagon
│   │   │   └── pages/
│   │   │       ├── Home.jsx
│   │   │       ├── About.jsx
│   │   │       ├── Experience.jsx
│   │   │       └── Contact.jsx
│   │   ├── styles/
│   │   │   └── global.css               # purple gradient background, base styles
│   │   ├── App.jsx
│   │   └── index.jsx
```

## Customization

1. Update the content in the page components (`Home.jsx`, `About.jsx`, etc.)
2. Modify the styles in `global.css`
3. Adjust the hexagon animation in `HexagonButton.jsx`
4. Update the `homepage` field in `package.json` with your GitHub username

## License

MIT License - feel free to use this project as a template for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 