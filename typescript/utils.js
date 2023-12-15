// create element
function createElement(type, identifier, content, position, events = {}) {
    const el = document.createElement(type);

    el.className = el.id = identifier;
    el.textContent = content;

    for (const [fn, handle] of Object.entries(events)) {
        el.addEventListener(fn, handle);
    }

    null !== position ?
        document
            .querySelector('.' + position || '#' + position)
            .appendChild(el)
        : document.body.appendChild(el)

    return el;
}

// hide show element
