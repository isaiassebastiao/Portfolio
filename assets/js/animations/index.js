const params = new URLSearchParams(window.location.search);

const about = document.querySelector('.about');
const home = document.querySelector('.home');
const projects = document.querySelector('.projects');


const current_page = params.get('page');

if(current_page == 'home'){
    home.style.color = 'black';
    console.log('home')
}else if(current_page == 'about'){
    about.style.color = 'black';
}else if(current_page == 'projects'){
    projects.style.color = 'black';
}


