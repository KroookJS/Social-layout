import { PostCart } from "./PostCart/PostCart";
import { PostNavigate } from "./PostNavigate";

export const PostBox = () => {
  return (
    <div className="fb-post1">
      <div className="fb-post1-container">
        <PostNavigate />
        <PostCart />
      </div>
    </div>
  );
};
