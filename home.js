const parent = document.getElementsByClassName('project');
console.log(parent);

const show = (event) => {
    console.log(event);
    event.target.nextElementSibling.style.visibility = 'visible';
};

const hide = (event) => {
    event.target.nextElementSibling.style.visibility = 'hidden';
};

for (i = 0; i < parent.length; i++) {
    parent[i].addEventListener('mouseover', show);
    parent[i].addEventListener('mouseout', hide);
}
