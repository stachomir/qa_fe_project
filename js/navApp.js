
const slideNavigationLinks = () => {
    const burger = document.querySelector('.navigation__burger');
    const navigation = document.querySelector('.navigation__list');
    const navigation_elements = document.querySelectorAll('.navigation__list li');


    burger.addEventListener('click', () => {
        navigation.classList.toggle('navigation__list--active');

        burger.classList.toggle('navigation__burger--toggle');

        navigation_elements.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navigationLinksFade 1s easy forwards ${index/5 + 0.3}s`;
            }
        })
    })


}

slideNavigationLinks();