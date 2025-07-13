# Custom Fonts (Assets)

Store your font files here for build-time processing and optimization.

## Usage in CSS:
```css
@font-face {
  font-family: 'CustomFont';
  src: url('./assets/fonts/CustomFont.woff2') format('woff2'),
       url('./assets/fonts/CustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

## Import in JavaScript:
```javascript
import CustomFontWoff2 from './assets/fonts/CustomFont.woff2'
import CustomFontWoff from './assets/fonts/CustomFont.woff'
```

## Font Files Structure:
```
src/assets/fonts/
├── CustomFont-Regular.woff2
├── CustomFont-Regular.woff
├── CustomFont-Bold.woff2
├── CustomFont-Bold.woff
└── CustomFont-Italic.woff2
```
