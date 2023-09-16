export const PopularGroups = () => {
  return (
    <div className="create-page">
      <ul>
        <li>
          <i className="fa-solid fa-circle-plus"></i>
          <h4>Популярные группы</h4>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li>
          <img
            src="https://github.com/KroookJS/Social-layout/blob/main/src/assets/images/group.jpg"
            alt="groups"
          />
        </li>
        <li>
          <b>
            React/Next.Js <span>200k участников</span>
          </b>
          <button>Вступить</button>
        </li>
      </ul>
    </div>
  );
};
