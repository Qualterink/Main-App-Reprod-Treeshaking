import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { visualizer } from 'rollup-plugin-visualizer';

const version: string = require('./package.json').version;

export default ({ mode }: { mode: string }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };

  return defineConfig({
    plugins: [
      vue(),
      viteCompression(),
      viteStaticCopy({
        targets: [
          {
            src: 'version.json',
            dest: '',
            transform: (
              content: string,
              _filename: string
            ): string => content.replace('@VERSION@', version)
          }
        ]
      }),
      visualizer()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base: '/',
    server: {
      port: 3984,
      host: true,
      proxy: {
        '/auth': {
          target: `${process.env.VITE_APP_BASE_IP}:2992`,
          autoRewrite: true
        },
        '/fhir-db': {
          target: process.env.VITE_APP_BASE_IP
        },
        '/json-storage': {
          target: process.env.VITE_APP_BASE_IP
        },
        '/fhir-data-aggregator': {
          target: process.env.VITE_APP_BASE_IP
        }
      }    },
    test: {
      globals: true
    }
  });
};
