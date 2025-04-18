import type MarkdownIt from 'markdown-it'

export default function underlinePlugin(md: MarkdownIt) {
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
