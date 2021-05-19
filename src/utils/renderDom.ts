export function renderDom(query, block) {
    const root = document.querySelector(query);

    root.appendChild(block.element);
    return root;
}
