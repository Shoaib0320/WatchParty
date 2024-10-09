export default {
  VITE_SERVER_HOST: import.meta.env.VITE_SERVER_HOST,
  VITE_OAUTH_REDIRECT_HOSTNAME:
    import.meta.env.VITE_OAUTH_REDIRECT_HOSTNAME ?? 'https://www.watchparty.me',
  VITE_FIREBASE_CONFIG:
    import.meta.env.VITE_FIREBASE_CONFIG ??
    '{"apiKey":"AIzaSyD6KuHyPlh-njbO8BGfXqBChTjw_jpBK0w","authDomain":"watch-party-42a77.firebaseapp.com","databaseURL":"https://watch-party-42a77.firebaseio.com","projectId":"watch-party-42a77","storageBucket":"watch-party-42a77.appspot.com","messagingSenderId":"295120970450","appId":"1:295120970450:web:263f20184add35677f830b","measurementId":"G-87TL5KL5NX"}',
  VITE_STRIPE_PUBLIC_KEY:
    import.meta.env.VITE_STRIPE_PUBLIC_KEY ??
    'pk_live_eVMbIifj5lnvgBleBCRaCv4E00aeXQkPxQ',
  VITE_RECAPTCHA_SITE_KEY:
    import.meta.env.VITE_RECAPTCHA_SITE_KEY ??
    '6LeDGP4UAAAAAGYZZenyU-3fRdhL3p0BaBmiK9mM',
  NODE_ENV: import.meta.env.DEV ? 'development' : 'production',
};
