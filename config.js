// WARNING: This config file contains hardcoded secrets for demo purposes
// DO NOT USE IN PRODUCTION

const config = {
  stripe: {
    // Hardcoded Stripe secret key (vulnerability for Secret Scanning demo)
    secretKey: 'sk_live_51A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0',
    publishableKey: 'pk_live_51A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0'
  },
  
  database: {
    // Hardcoded database password (vulnerability for Secret Scanning demo)
    connectionString: 'postgresql://dbuser:P@ssw0rd123!@localhost:5432/portfolio'
  },
  
  api: {
    // Hardcoded API key (vulnerability for Secret Scanning demo)
    key: 'AIzaSyD-1234567890abcdefghijklmnopqrstuv',
    endpoint: 'https://api.example.com'
  }
};

module.exports = config;
