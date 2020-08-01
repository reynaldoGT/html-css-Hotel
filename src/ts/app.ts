import "../scss/styles.scss";
//?Here go you ts code
//* import '../static/image.jpg';
//* import 'image.jpg';


const links: NodeListOf<Element> = document.querySelectorAll('#links a');


links.forEach(element => {
    element.addEventListener('click', () => {
        links.forEach(element => {
            element.classList.remove('active');
        })
        element.classList.add('active');
    })
})


