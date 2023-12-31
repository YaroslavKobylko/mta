import React, { useState } from 'react';
import myPhoto from './msg608490109-208398.jpg';
import './styles.css';

const About = () => {
        const [isLampOn, setIsLampOn] = useState(false);
      
        const toggleLamp = () => {
          setIsLampOn(!isLampOn);
        };
  return (
<div className="content-wrapper">
  <div className='text'>
  <p>Мене звати Ярослав Кобилко. Я студент Львівського політехнічного університету. Я розробив додаток для обліку доходів і витрат.</p>
  <p>Додаток дозволяє користувачам додавати доходи та витрати, вказувати категорії, дати та коментарі. Він також веде історію операцій та розраховує загальний баланс.</p>
  <p>Я зацікавлений у знаходженні робочих можливостей та навчанні нових технологій у сфері програмування.</p>
  </div>
  <div class="content">
  <div class="photo">
    <img className="my-photo" src={myPhoto} alt="Моя фотографія" />
  </div>
  <div className="redes">
  <a href="https://www.instagram.com/kobylko_yaroslav/" className="instagram">
    <svg className="instagram" fillRule="nonzero" height="25px" width="25px" viewBox="0 0 256 256">
      <g style={{ mixBlendMode: "normal" }}>
        <g transform="scale(8,8)">
          <path d="M11.46875,5c-3.55078,0-6.46875,2.91406-6.46875,6.46875v9.0625c0,3.55078,2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875-2.91406 6.46875-6.46875v-9.0625c0-3.55078-2.91406-6.46875-6.46875-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875 1.99609 4.46875 4.46875v9.0625c0 2.47266-1.99609 4.46875-4.46875 4.46875h-9.0625c-2.47266 0-4.46875-1.99609-4.46875-4.46875v-9.0625c0-2.47266 1.99609-4.46875 4.46875-4.46875zM21.90625,9.1875c-0.50391 0-0.90625 0.40234-0.90625 0.90625c0 0.50391 0.40234 0.90625 0.90625 0.90625c0.50391 0 0.90625-0.40234 0.90625-0.90625c0-0.50391-0.40234-0.90625-0.90625-0.90625zM16,10c-3.30078 0-6 2.69922-6 6c0 3.30078 2.69922 6 6 6c3.30078 0-6-2.69922 6-6c0-3.30078-2.69922-6-6-6zM16,12c2.22266 0-4 1.77734 4 4c0 2.22266-1.77734 4-4 4c-2.22266 0-4-1.77734-4-4c0-2.22266-1.77734-4-4-4z"></path>
        </g>
      </g>
    </svg>
  </a>
  <a href="#" className="twitter">
  <svg xmlns="https://t.me/yaroslav_kobylko" width="25" height="25" fill="currentColor" class="telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg>
  </a>
  <a href="https://github.com/YaroslavKobylko" className="github">
    <svg className="github" height="25px" width="25px" viewBox="0 0 30 30">
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c-0.615,0.174-1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>
  </a>
</div>
</div>
      <p>І ось ваша лампа:</p>
      <div>
      <div className={`lamp ${isLampOn ? 'on' : ''}`} onClick={toggleLamp}>
        <div className="light"></div>
      </div>
    </div>
    <div className="placeholder-element" style={{ height: "100px" }}></div>
    </div>
  );
};

export default About;