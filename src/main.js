import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import svgIcon from '@/components/SvgIcon/index.vue'

import 'amfe-flexible/index.js'
import './assets/styles/index.scss'

import './router/permission'
import directive from './directive'

import { List,Cell,Search,PullRefresh,Grid,GridItem,Image} from 'vant';

const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(List);
app.use(Cell);
app.use(Search);
app.use(PullRefresh);
app.use(Grid);
app.use(GridItem);
app.use(Image);

directive(app);

app.component('svg-icon', svgIcon)

app.mount('#app')
