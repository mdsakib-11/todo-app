let addtoDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");


addtoDoButton.addEventListener('click', function(){
  const paragraph = document.createElement('p');
  paragraph.classList.add('inputD');
  const button = document.createElement('button');
  button.classList.add('buuton-style');
  button.innerHTML = "Delete";
  toDoContainer.appendChild(button);
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);

  inputField.value ="";

  button.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph);
    toDoContainer.removeChild(button);
  })
})
