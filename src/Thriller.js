import React from "react";

const Thriller = ({ tvShows }) => {
  return (
    <div className="lolomoRow lolomoRow_title_card ltr-0">
      <h2 className="rowTitle ltr-0">
        Binge-worthy Western Crime TV Thrillers
      </h2>
      <div className="rowContainer rowContainer_title_card" id="row2">
        <div className="ptrack-container">
          <div className="rowContent slider-hover-trigger-layer">
            <div className="slider">
              <ul className="pagination-indicator">
                {tvShows.map((tvShow, index) => (
                  <li key={index} className={index === 0 ? "active" : ""}></li>
                ))}
              </ul>
              <div className="sliderMask showPeek">
                <div
                  className="sliderContent row-with-x-columns"
                  style={{
                    WebkitTransform: "your-webkit-transform-value",
                    MsTransform: "your-ms-transform-value",
                    transform: "your-transform-value",
                  }}
                >
                  {tvShows.map((tvShow, index) => (
                    <div
                      key={index}
                      className={`slider-item slider-item-${index}`}
                    >
                      <div id={`title-card-1-${index}`} className="title-card">
                        <div className="ptrack-content">
                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                            <a
                              href={tvShow.link}
                              role="link"
                              aria-label={tvShow.title}
                              tabIndex="0"
                              aria-hidden="false"
                              className="slider-refocus"
                            >
                              <img
                                src={tvShow.imageSrc}
                                className="boxart-image boxart-image-in-padded-container"
                              />
                              <div
                                className="fallback-text-container"
                                aria-hidden="true"
                              >
                                <p className="fallback-text">{tvShow.title}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <span
                className="handle handleNext active"
                tabIndex="0"
                role="button"
                aria-label="See more"
              >
                <button
                  className="indicator-icon icon-rightCaret"
                  tabIndex="0"
                  role="button"
                  aria-label="See more titles"
                ></button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thriller;
