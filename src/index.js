document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks=document.getElementById('tasks');
  const form=document.getElementById('create-task-form');

  form.addEventListener("submit", function(event){
    const input=document.querySelector("#new-task-description").value;
    tasks.innerHTML+= `<li> ${input} <button data-action = "delete">x</button> </li>`;
    event.preventDefault();
  });

  tasks.addEventListener("click", function(evernt){
    if (event.target.dataset.action==="delete") {
      event.target.parentElement.remove();
    }
  });
});
