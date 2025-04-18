import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import initFootnote from '../plugins/footnote'
import './style.css'
import './brand.css'

export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ router }) {
        if (typeof window !== 'undefined') {
            router.onAfterRouteChanged = () => {
                setTimeout(() => {
                    initFootnote()
                }, 0)
            }
        }
    }
}