function choice(items) {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
}

function remove(item, items) {
    const itemIndex = items.indexOf(item);
    if (itemIndex > -1) {
        items.splice(itemIndex, 1);
    }
}

export {choice, remove};