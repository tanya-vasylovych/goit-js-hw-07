const categories = document.querySelectorAll(`#categories li.item`);
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector(`h2`).textContent;
    console.log(`Category: ${title}`)
    const item = category.querySelectorAll(`li`);
    console.log(`Elements: ${item.length}`);
})
