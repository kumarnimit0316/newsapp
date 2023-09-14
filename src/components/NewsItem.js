import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    let d = new Date(date).toUTCString();
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                right: "0",
              }}
            >
              <span className="position-absolute top-0 badge rounded-pill bg-danger">
                {source}
              </span>
            </div>
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://akamaividz2.zee5.com/image/upload/w_1082,h_609,c_scale,f_webp,q_auto:eco/resources/0-10-CHN-000501271-20230112150000/list/3FACCB092D2FDBB244E070C7BDD45A4ED085E77BF4fe28188ce244fdeac875199894f1aab.jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"}
                  {d}
                </small>
              </p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
