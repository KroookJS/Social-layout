export const CreatePost = () => {
  return (
    <div className="createPost">
      <h3 className="mini-headign">Создать пост</h3>
      <div className="post-text">
        <img
          src="https://github.com/KroookJS/Social-layout/blob/main/src/assets/images/user.jpg"
          alt="user"
        />
        <input type="text-area" placeholder="Расскажи о своем проекте" />
      </div>

      <div className="post-icon">
        <a href="#" style={{ background: "#ffebed" }}>
          <i
            style={{ background: "#ff4154" }}
            className="fa-solid fa-camera"
          ></i>
          Для всех
        </a>
      </div>
    </div>
  );
};
