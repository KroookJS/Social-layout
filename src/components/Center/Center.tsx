import { PostBox } from "./PostBox/PostBox";
import { CreatePost } from "./CreatePost/CreatePost";
import { Stories } from "./Stories/Stories";

export const Center = () => {
  return (
    <div className="home-center">
      <div className="home-center-wrapper">
        <Stories />
        <CreatePost />
        <PostBox />
      </div>
    </div>
  );
};
