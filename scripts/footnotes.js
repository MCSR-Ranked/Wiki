// document.addEventListener('vitepress:afterRouteChanged', () => {
// Select all footnote references and footnotes
const footnoteRefs = document.querySelectorAll(".footnote-ref");
const footnotes = document.querySelectorAll(".footnotes li");

// Create a map of footnote ID to content
const footnoteMap = new Map();
footnotes.forEach((footnote) => {
    const idMatch = footnote.id.match(/^fn(\d+)$/);
    if (idMatch) {
        const footnoteId = idMatch[1];
        const content = footnote.innerText || footnote.textContent;
        footnoteMap.set(footnoteId, content.replace(' ↩︎', ''));
    }
});

// Add the footnote content as a title attribute or wrap in <abbr>
footnoteRefs.forEach((ref) => {
    const idMatch = ref.getElementsByTagName('a')[0].id.match(/^fnref(\d+)$/);
    if (!idMatch) return;

    const content = footnoteMap.get(idMatch[1]);
    if (content) {
        ref.setAttribute('data-note', content);
    }
});

const tooltip = document.createElement("div");
tooltip.className = "footnote-tooltip";
document.body.appendChild(tooltip);

const noteElements = document.querySelectorAll('[data-note]');
noteElements.forEach((el) => {
    const noteText = el.getAttribute("data-note");
    if (!noteText) return;

    el.addEventListener("mouseenter", (e) => {
        tooltip.textContent = noteText;
        tooltip.style.opacity = "1";

        const rect = el.getBoundingClientRect();
        const tooltipWidth = window.innerWidth * 0.6;
        const margin = 8;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        let left = mouseX;
        if (left < margin) left = margin;
        if (left + tooltipWidth > document.documentElement.scrollWidth - margin) {
          left = document.documentElement.scrollWidth - tooltipWidth - margin;
        }
  
        const top = mouseY + rect.height;
  
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    });

    el.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });
});
// });