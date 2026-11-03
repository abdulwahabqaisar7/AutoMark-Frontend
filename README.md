# AutoMark

AutoMark is a responsive car marketplace website prototype for browsing pre-owned vehicles, viewing car details, and submitting car or contact information. The interface is based on the AutoMark Figma design and uses local image and icon assets.

## Live site

Visit the deployed website: <https://automark-plum.vercel.app/index.html>

- [Home](https://automark-plum.vercel.app/index.html)
- [Car details](https://automark-plum.vercel.app/car-details.html)
- [Sell your car](https://automark-plum.vercel.app/sell-your-car.html)
- [Login](https://automark-plum.vercel.app/login.html)

## Pages

- **Home** (`index.html`) — featured vehicle cards, city/brand/budget filters, benefits, and contact form.
- **Car details** (`car-details.html`) — vehicle specifications, contact actions, and an enquiry form. Featured cards link here with a `car` query parameter.
- **Sell your car** (`sell-your-car.html`) — vehicle submission form with photo selection and selling guidance.
- **Login** (`login.html`) — login interface with a password visibility toggle.

## Run locally

No build step or package installation is required. Open `index.html` in a browser, or serve the project directory locally:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>.

Example vehicle detail URLs:

- `http://localhost:8000/car-details.html?car=corolla`
- `http://localhost:8000/car-details.html?car=civic`
- `http://localhost:8000/car-details.html?car=alto`
- `http://localhost:8000/car-details.html?car=yaris`

## Project structure

```text
AutoMark/
├── assets/             # Vehicle photos, logo, and interface icons
├── index.html          # Homepage
├── car-details.html    # Vehicle detail page
├── sell-your-car.html  # Vehicle submission page
├── login.html          # Login page
├── styles.css          # Shared styles and sell-page styling
├── pages.css           # Homepage, details, and login page styling
├── site.js             # Shared responsive navigation
├── home.js             # Homepage filters and interactions
├── car-details.js      # Vehicle data and enquiry interactions
└── login.js            # Login page interactions
```

## Technology

- Semantic HTML5
- CSS with responsive layouts and shared design tokens
- Vanilla JavaScript
- Inter font from Google Fonts
- Local SVG and PNG assets in `assets/`

## Prototype limitations

Forms currently provide front-end feedback only; they do not send or store submissions. Login, password recovery, account creation, and showroom contact flows require suitable backend services before production use. The sell page currently loads Tailwind CSS from its CDN.
