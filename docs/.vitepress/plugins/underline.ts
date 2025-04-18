import type MarkdownIt from 'markdown-it'

export default function underlinePlugin(md: MarkdownIt) {
    md.inline.ruler.before('emphasis', 'underline_plus', (state, silent) => {
        const start = state.pos
        if (state.src.charCodeAt(start) !== 0x2B || state.src.charCodeAt(start + 1) !== 0x2B) return false

        const end = state.src.indexOf('++', start + 2)
        if (end === -1 || end <= start + 2) return false

        if (!silent) {
            state.push('underline_open', 'u', 1)

            const content = state.src.slice(start + 2, end)
            const tokenInline = state.push('underline_content', '', 0)
            tokenInline.content = content
            tokenInline.children = []

            const savedPos = state.pos
            const savedMax = state.posMax
            state.pos = 0
            state.posMax = content.length
            state.md.inline.tokenize(state)
            state.pos = savedPos
            state.posMax = savedMax

            state.push('underline_close', 'u', -1)
        }

        state.pos = end + 2
        return true
    })

    md.renderer.rules.underline_open = () => '<u>'
    md.renderer.rules.underline_close = () => '</u>'

    md.renderer.rules.underline_content = (tokens, idx, options, env, self) => {
        return self.renderInlineAsText(tokens[idx].children ?? [], options, env)
    }


    const originalStrongOpen = md.renderer.rules.strong_open
    const originalStrongClose = md.renderer.rules.strong_close

    md.renderer.rules.strong_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.markup === '__') {
            return '<u>'
        }
        return originalStrongOpen ? originalStrongOpen(tokens, idx, options, env, self) : '<strong>'
    }

    md.renderer.rules.strong_close = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.markup === '__') {
            return '</u>'
        }
        return originalStrongClose ? originalStrongClose(tokens, idx, options, env, self) : '</strong>'
    }

    // ++ 렌더링
    md.renderer.rules.underline_open = () => '<u>'
    md.renderer.rules.underline_close = () => '</u>'
}
