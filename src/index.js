import './styles.css';
import menuTeamplate from './teamplates/menu-item-teamplate.hbs';
import menu from './menu.json';


const refs = {
    toggle: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
    menu: document.querySelector('.js-menu')
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') === Theme.DARK) {
    refs.toggle.checked = true;
    refs.body.classList.replace(Theme.LIGHT,Theme.DARK);
     }
console.log(refs.toggle, refs.toggle.checked)
console.dir(refs.body)



refs.toggle.addEventListener('change', () => {
    if (refs.body.classList.length === 0 || refs.body.classList.contains('light-theme')) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);

    } else if (refs.body.classList.contains(Theme.DARK)) {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
                

    }
    localStorage.setItem('theme',refs.body.classList)
})

refs.menu.innerHTML = menuTeamplate(menu);


