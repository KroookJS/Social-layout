export const RequestsFriend = () => {
  return (
    <>
      <li>
        <img
          src="https://raw.githubusercontent.com/KroookJS/Social-layout/main/src/assets/images/user4.jpg"
          alt="user"
        />
      </li>
      <li className="request-bio">
        <b>Вафо Сардаров</b>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="home">
          <button>Добавить</button>
          <button className="friend-remove">удалить</button>
        </div>
      </li>
    </>
  );
};
