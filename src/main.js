import { createApp } from 'vue'
import Header from './Header.vue'
import Panel from './Panel.vue'
import Profile from './Profile.vue'
import Create from './Create.vue'

createApp(Header).mount('#header')
createApp(Panel).mount('#panel')
createApp(Profile).mount('#profile')
createApp(Create).mount('#create')