export default function init() {
    const tooltipClass = 'footnote-tooltip';

    let tooltip = document.querySelector(`.${tooltipClass}`) as HTMLElement | null;
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = tooltipClass;
        document.body.appendChild(tooltip);
    }

    const refs = document.querySelectorAll<HTMLElement>('.footnote-ref');

    refs.forEach(ref => {
        const link = ref.querySelector('a');
        if (!link) return;

        const idMatch = link.id.match(/^fnref(\d+)$/);
        const fnId = idMatch?.[1];
        const footnote = document.getElementById(`fn${fnId}`);

        if (!fnId || !footnote) return;

        const noteText = footnote.innerText.replace(' ↩︎', '');
        ref.setAttribute('data-note', noteText);

        ref.onmouseenter = (e) => {
            console.log('tooltip triggers');
            const mouseEvent = e as MouseEvent;

            tooltip!.textContent = noteText;
            tooltip!.style.opacity = '1';

            const tooltipWidth = tooltip!.offsetWidth;
            const margin = 10;

            let left = mouseEvent.clientX + window.scrollX;
            let top = mouseEvent.clientY + margin;

            if (left + tooltipWidth > window.innerWidth + window.scrollX) {
                left = window.innerWidth + window.scrollX - tooltipWidth - margin;
            }

            tooltip!.style.left = `${left}px`;
            tooltip!.style.top = `${top}px`;
        };

        ref.onmouseleave = () => {
            tooltip!.style.opacity = '0';
        };
    });
    console.log('tooltip ready');
}