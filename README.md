# EVA Voice - Frontend

> Modern React-based frontend for the EVA Voice HR Assistant system

## 🚀 Features

- **Real-time Chat Interface** - Text-based conversations with the HR assistant
- **Voice Interface** - LiveKit-powered voice conversations
- **Dashboard** - User management and analytics
- **Authentication** - Secure login and session management
- **Responsive Design** - Works on desktop, tablet, and mobile

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Backend API running (see [evavoice-backend](https://github.com/yourusername/evavoice-backend))

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/evavoice-frontend.git
   cd evavoice-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your settings:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_LIVEKIT_WS_URL=ws://localhost:7880
   ```

4. **Start development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🧪 Testing

```bash
npm test
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ChatInterface.js      # Text chat component
│   ├── VoiceInterface.js      # Legacy voice interface
│   ├── LiveKitVoiceInterface.js  # LiveKit voice interface
│   ├── Dashboard.js           # Admin dashboard
│   ├── Header.js              # App header
│   └── Login.js               # Authentication
├── services/
│   └── authService.js         # Authentication service
├── App.js                     # Main app component
├── index.js                   # App entry point
└── index.css                  # Global styles
```

## 🔌 API Integration

The frontend communicates with the backend via:

- **REST API** - HTTP requests for data operations
- **WebSocket** - Real-time chat and notifications
- **LiveKit** - Direct connection for voice sessions

### API Configuration

Update `REACT_APP_API_URL` in `.env` to point to your backend:

```env
# Development
REACT_APP_API_URL=http://localhost:5000

# Production
REACT_APP_API_URL=https://api.yourdomain.com
```

## 🎨 Customization

### Styling

- Global styles: `src/index.css`
- Component styles: Inline styled-components in each component file

### Branding

Update the following files to customize branding:
- `public/index.html` - App title and meta tags
- `src/components/Header.js` - Logo and header text

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the build/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://yourusername.github.io/evavoice-frontend",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API URL | `http://localhost:5000` |
| `REACT_APP_LIVEKIT_WS_URL` | LiveKit WebSocket URL | `ws://localhost:7880` |

## 🐛 Troubleshooting

### CORS Errors

If you see CORS errors, ensure the backend has the frontend URL in its CORS whitelist:

```javascript
// In backend server.js
cors({
  origin: "http://localhost:3000",  // Your frontend URL
  credentials: true
})
```

### LiveKit Connection Issues

1. Verify LiveKit server is running
2. Check `REACT_APP_LIVEKIT_WS_URL` is correct
3. Ensure backend is generating valid LiveKit tokens

## 📚 Related Repositories

- [Backend API](https://github.com/yourusername/evavoice-backend)
- [Voice Agent](https://github.com/yourusername/evavoice-voice-agent)

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Contact: support@yourdomain.com

