import "../scss/styles.scss";
//?Here go you ts code
//* import '../static/image.jpg';
//* import 'image.jpg';
import { rooms_cards, roomsInterface } from './rooms-cards';

const links: NodeListOf<Element> = document.querySelectorAll('#links a');


links.forEach(element => {
    element.addEventListener('click', () => {
        links.forEach(element => {
            element.classList.remove('active');
        })
        element.classList.add('active');
    })
})

const rooms = document.querySelector('#rooms-cards');
rooms_cards.forEach(room => {
    const room_card = document.createElement('div');
    room_card.classList.add('card');
    room_card.innerHTML += ` <img src="${room.urlImage}" alt="">
    <div class="card-info">
        <div class="title-price">
            <h2>${room.room_name}</h2>
            <span>BOB ${room.price} / ${room.location}</span>
        </div>
        <div class="ver-detalles">
            ver Detalles
        </div>
    </div>`;
    rooms.appendChild(room_card);
});


