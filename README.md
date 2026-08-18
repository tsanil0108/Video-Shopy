# VideoShopy — React + Vite Frontend-Only Digital Store

## Run locally
```bash
npm install
npm run dev
```

## Configure products
Open `src/config.js` and replace each:
- `paymentLink` with your Razorpay Payment Link
- `driveLink` with your Google Drive file/folder link

## Razorpay redirect
For each Razorpay Payment Link, configure the post-payment redirect URL as:
`https://YOUR-DOMAIN.vercel.app/success`

## Deploy on Vercel
1. Upload this project to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

## Important frontend-only limitation
This project has no backend and therefore cannot securely verify Razorpay payment signatures. The Google Drive URL is ultimately present in browser-delivered code/storage. This is suitable only when you accept that limitation for low-risk digital delivery.
