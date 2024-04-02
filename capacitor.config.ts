import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'club.pockee',
  appName: 'pockee',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
