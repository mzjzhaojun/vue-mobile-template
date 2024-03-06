import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import svgIcon from '@/components/SvgIcon/index.vue'

import 'amfe-flexible/index.js'
import './assets/styles/index.scss'

import './router/permission'
import directive from './directive'

import { List,Cell,Search,PullRefresh,Grid,GridItem,Image,Divider,Icon ,Form, Field, CellGroup,Button,Uploader,Notify,Overlay,Loading,Tag,Popover,Picker,Popup,Area } from 'vant';

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
app.use(Divider);
app.use(Icon);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button);
app.use(Uploader);
app.use(Notify);
app.use(Overlay);
app.use(Loading);
app.use(Tag);
app.use(Popover);
app.use(Picker);
app.use(Popup);
app.use(Area);

directive(app);
app.component('svg-icon', svgIcon)
app.mount('#app')
