import { createPinia } from 'pinia';

// pinia持久化存储插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export * from './modules/demo';

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

export default pinia;
