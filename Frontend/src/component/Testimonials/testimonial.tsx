import React from 'react';
import './testimonial.css';

const testimonial : React.FC = () => {
return(
    <>
  <div className="container">
  <div className="row">
    <div className="col-sm-12">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <h2>
          Testimonials
        </h2>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eu sem tempor, varius quam at, luctus dui. Mauris magna
                    metus, dapibus nec turpis vel, semper malesuada ante.
                  </p>
                </div>
                <div className="media">
                  <div className="media-left d-flex mr-3">
                    <img src="/examples/images/clients/1.jpg" alt="" />
                  </div>
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <b>Paula Wilson</b>
                      </div>
                      <div className="details">Media Analyst / SkyNet</div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    Vestibulum quis quam ut magna consequat faucibu. Eget mi
                    suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.
                    Quis quam ut magna consequat faucibus quam.
                  </p>
                </div>
                <div className="media">
                  <div className="media-left d-flex mr-3">
                    <img src="/examples/images/clients/2.jpg" alt="" />
                  </div>
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <b>Antonio Moreno</b>
                      </div>
                      <div className="details">Web Developer / SoftBee</div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eu sem tempor, varius quam at, luctus dui. Mauris magna
                    metus, dapibus nec turpis vel, semper malesuada ante.
                  </p>
                </div>
                <div className="media">
                  <div className="media-left d-flex mr-3">
                    <img src="/examples/images/clients/3.jpg" alt="" />
                  </div>
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <b>Michael Holz</b>
                      </div>
                      <div className="details">Web Developer / DevCorp</div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    Vestibulum quis quam ut magna consequat faucibu. Eget mi
                    suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.
                    Quis quam ut magna consequat faucibus quam.
                  </p>
                </div>
                <div className="media">
                  <div className="media-left d-flex mr-3">
                    <img src="/examples/images/clients/4.jpg" alt="" />
                  </div>
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <b>Mary Saveley</b>
                      </div>
                      <div className="details">
                        Graphic Designer / MarsMedia
                      </div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eu sem tempor, varius quam at, luctus dui. Mauris magna
                    metus, dapibus nec turpis vel, semper malesuada ante.
                  </p>
                </div>
                <div className="media">
                  <div className="media-left d-flex mr-3">
                    <img src="/examples/images/clients/5.jpg" alt="" />
                  </div>
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <b>Martin Sommer</b>
                      </div>
                      <div className="details">SEO Analyst / RealSearch</div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    Vestibulum quis quam ut magna consequat faucibu. Eget mi
                    suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.
                    Quis quam ut magna consequat faucibus quam.
                  </p>
                </div>
                <div className="media">
                  <div className="media-left d-flex mr-3">
                    <img src="/examples/images/clients/6.jpg" alt="" />
                  </div>
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <b>John Williams</b>
                      </div>
                      <div className="details">Web Designer / UniqueDesign</div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control left"
          href="#myCarousel"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left" />
        </a>
        <a
          className="carousel-control right"
          href="#myCarousel"
          data-slide="next"
        >
          <i className="fa fa-chevron-right" />
        </a>
      </div>
    </div>
  </div>
</div>
  </>
  )
};

export default testimonial;