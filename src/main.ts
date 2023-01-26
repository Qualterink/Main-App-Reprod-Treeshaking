import { createApp } from 'vue';
import App from './App.vue';
import {
  externalVueConfig,
  entryInstall
} from 'example-library-repro-font-awesome-treeshaking';

const app = createApp(App);

/****************** **************** **************** ******************/
const externalConfigParams: any = {
  vueInstance: app
};

externalVueConfig(externalConfigParams);
app.use(entryInstall);

app.mount('#app');
