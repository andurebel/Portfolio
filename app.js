import {data} from './data.js';

const projectCollection= data.map((project) =>{
    return`
    <div class="project">
            <h2>${project.name}</h2>
            <div class="image">
              <img src="${project.image}" alt="${project.name}" />
            </div>
            <p>${project.description}</p>
            <div class="project-description">
              <ul class="technologies">
                <li><a href="${project.site}">Demo</a></li>
                <li><a href="${project.code}">Code</a></li>
                
              </ul>
            </div>
          </div>
    `
}).join('')

const project=document.querySelector('.projects-container')

project.innerHTML=projectCollection;


