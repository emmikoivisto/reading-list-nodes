document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener("submit", handleSubmit);
});

  const handleSubmit = function(event) {
    event.preventDefault()
    const toReadList = document.querySelector("#reading-list")
    const listItem = document.createElement('li');
    listItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`
    toReadList.appendChild(listItem)
    document.getElementById("new-item-form").reset();
  }; 
  

  const DeleteAll = function () {
    const listItem = document.getElementById('li');
    toReadList.removeChild(listItem);
   };