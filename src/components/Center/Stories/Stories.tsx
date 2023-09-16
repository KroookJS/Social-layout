import { stories } from "../../../data/data-stories";
import { StoriesData } from "../../../types/data-type";
import { StoriesItem } from "./StoriesItem";

export const Stories = () => {
  return (
    <div className="stories">
      <h3 className="mini-headign">Stories</h3>
      <div className="stories-wrapper">
        {stories.map((el: StoriesData) => {
          return (
            <StoriesItem
              key={el.id}
              authorImg={el.authorImg}
              name={el.name}
              imgUrl={el.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
