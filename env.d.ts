/// <reference types="vite/client" />
// @ts-ignore

interface WindowExtend {
  APP_TENANT: string;
  Cypress: any;
}

interface Window extends WindowExtend {}
