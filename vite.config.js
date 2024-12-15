import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import svgr from "vite-plugin-svgr";

const envFiles = {
  development: '.env.development',
  testing: '.env.testing',
  production: '.env.production',
};

export default ({ command }) => {
  const envFile = envFiles[process.env.NODE_ENV] || '.env';
  const env = dotenv.config({ path: envFile }).parsed;

  return {
    plugins: [react(),svgr()],
    server: {
      port: 4001, // Change this to the desired port number
    },
    define: {
      'process.env': env,
    },
  };
};
