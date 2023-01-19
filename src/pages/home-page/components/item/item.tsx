import { Article } from "../../home";
import { highlightText } from "../../../../utils/highlight-text";
import dayjs from "dayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import "./Item.scss"

export const Item = ({
  value: { id, imageUrl, title, summary, publishedAt },
  keyword,
}: {
  value: Article;
  keyword: string;
}) => {
  const published = dayjs(publishedAt).format("MMMM D YYYY");
  const summaryResult = highlightText(
    "span",
    summary,
    keyword,
    "summary-highlight"
  );

  return (
    <Link to={`/${id}`}>
      <img src={imageUrl} alt="" />

      <div className="data-time">
        <CalendarTodayIcon fontSize="small" />
        {published}
      </div>

      <p>
        <h1>{title}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: summaryResult }}></h2>
      </p>
      <h1 className="forward">
        Read more
        <ArrowForwardIcon />
      </h1>
    </Link>
  );
};
