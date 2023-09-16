import { Avatar } from "../../../ui/Avatar";

export const PostCart = () => {
  return (
    <div className="fb-p1-main">
      <div className="post-title">
        <Avatar img="src/assets/images/user2.jpg" />
        <ul>
          <li>
            <h3>
              Михаил Ковальчук <span> . 2 часа назад</span>
            </h3>
          </li>
          <li>
            <span>02 марта 12:55</span>
          </li>
        </ul>
        <p>
          -Что такое React и почему это круто ? Reaсt — это библиотека,
          отвечающая за создание пользовательского интерфейса сайта. Причём
          такого интерфейса, где есть не только текст, но и интерактивные
          элементы, динамика, разные события. Под интерактивными событиями мы
          понимаем возможность поставить лайк, отправить заполненную контактную
          форму, работать с картами, напичканными инфографикой, или с
          административной панелью в интернет-магазине, где у товара, корзины и
          процесса отправки платежа бывает несколько состояний.
        </p>
      </div>

      <div className="container-images">
        <div className="post-images1">
          <img src="src/assets/images/pp.jpg" alt="post images 01" />

          <img src="src/assets/images/pp2.jpg" alt="post images 02" />
        </div>
        <div className="post-images2">
          <img src="src/assets/images/pp4.jpg" alt="post images 04" />
        </div>
      </div>

      <div className="like-comment">
        <ul>
          <li className="love-leke">
            <img src="src/assets/images/love.png" alt="love" />
            <span>153 понравилось</span>
          </li>
          <li>
            <i className="fa-regular fa-comment-dots"></i>
            <span>555 коментария</span>
          </li>
          <li>
            <i className="fa-solid fa-share-from-square"></i>
            <span>15 сохранили</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
