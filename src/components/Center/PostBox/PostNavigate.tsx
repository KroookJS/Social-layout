const navigateItem = ["популярные", "недавние", "рекомендации"];
export const PostNavigate = () => {
  return (
    <div className="fb-post1-header">
      <ul>
        {navigateItem.map((li: string, inx: number) => (
          <li key={li} className={inx === 0 ? "active" : ""}>
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};
