# Custom Fonts

Store your font files (.woff, .woff2, .ttf, .otf) in this directory.

## Usage in CSS:
```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont.woff2') format('woff2'),
       url('/fonts/CustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

## Font Files Structure:
```
public/fonts/
├── CustomFont-Regular.woff2
├── CustomFont-Regular.woff
├── CustomFont-Bold.woff2
├── CustomFont-Bold.woff
└── CustomFont-Italic.woff2
```
