
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.9760be95492f43bda09df2cc342e157b',
  appName: 'CitySync - Smart Citizen Companion',
  webDir: 'dist',
  server: {
    url: 'https://9760be95-492f-43bd-a09d-f2cc342e157b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e40af',
      showSpinner: false
    }
  }
};

export default config;
