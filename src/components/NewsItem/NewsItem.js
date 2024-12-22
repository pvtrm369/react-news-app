import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Details from "./Details/Details";
import { ReactComponent as ArrowIcon } from '../Images/ArrowIcon.svg'; 
import "./NewsItem.css"; 
import SummarizeIcon from '@mui/icons-material/Summarize';
function NewsItem(props) {
  const { imageUrl, alt, description, title, channel, published, urlNews,updateQuery,updateAssistant } =
    props;
    const handleClick = () => {
      updateQuery(`summarize the news article from the link ${urlNews}`);
      
      updateAssistant(true);
    };
    const truncateText = (text, wordLimit) => {
      const words = text.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + " ...";
      }
      return text;
    };


  return (
    <Card className="card">
      <Card.Img className="card-img" variant="top" src={imageUrl} alt={alt} />
      <Card.Body>
        <Card.Title>{truncateText(title, 5)}</Card.Title>
        <Card.Text className="card-description">{truncateText(description, 20)}</Card.Text>
        <Details channel={channel} published={published} />
        <div className="button d-flex justify-content-between"> 
          <Button
          className="card-btn"
          href={urlNews}
          target="_blank"
        >
          Read more <ArrowIcon className="arrow-icon" />
        </Button>
       <Button className="short-btn"onClick={handleClick} >
        <SummarizeIcon/>
       </Button></div>
       

      </Card.Body>
    </Card>
  );
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  published: PropTypes.string,
  urlNews: PropTypes.string,
  updateQuery: PropTypes.func.isRequired,
  updateAssistant:PropTypes.func.isRequired,

};

export default NewsItem;
