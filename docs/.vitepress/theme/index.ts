import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import initFootnote from '../plugins/footnote'
import './style.css'
import './brand.css'
import YouTubeEmbed from '../components/YouTubeEmbed.vue'

export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app, router }) {
        if (typeof window !== 'undefined') {
            router.onAfterRouteChanged = () => {
                setTimeout(() => {
                    initFootnote()
                }, 0)
            }
        }
        app.component('YouTubeEmbed', YouTubeEmbed)
    }
}