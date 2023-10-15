import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Get HTTPS server settings
  const getHTTPSServerSettings = () => {
    let serverSettings = {};
    // remove https:// and trailing slash from APP URL
    const host = env.APP_URL.replace('https://', '').replace(/\/$/, '');
    const key = env.VITE_SERVER_KEY;
    const cert = env.VITE_SERVER_CERT;

    // If HTTPS cert or key are not found, use HTTP instead
    if (!key || !cert) {
      console.log('HTTPS server settings not found. Using HTTP instead.');
      return;
    }

    return (serverSettings = {
      host,
      hmr: { host },
      https: { key, cert },
    });
  };

  return {
    server: {
      ...getHTTPSServerSettings(),
    },
    css: {
      devSourcemap: true, // Enable sourcemaps for dev
    },

    plugins: [
      laravel({
        // Add assets paths
        input: ['resources/css/app.css', 'resources/js/app.js'],
        refresh: true,
      }),
    ],
  };
});
