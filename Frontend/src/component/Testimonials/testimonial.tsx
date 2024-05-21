import React, { useState, useEffect } from "react";
import "./testimonial.css";

interface TestimonialData {
  name: string;
  customer: string;
  image: string;
  testimonial: string;
}

const testimonial: React.FC = () => {
  const [test, setTestimonials] = useState<TestimonialData[]>([]);

  useEffect(() => {
    fetch("../public/data/testimonialdata.json")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      setTestimonials(data);
      console.log('Fetched Testimonial:', data);
      console.log(test);
    })
    .catch(error => console.error('Error fetching blogs:', error));
}, []);


    return (
      <>
        <div className="testimonial-container">
          <div className="row">
            <div className="col-sm-12">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <h2 className="testimonialheading">Testimonials</h2>
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to={1} />
                  <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="testimonial">
                          <p>{test[0]?.testimonial || 'Loading...'}</p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                          <img src={test[0]?.image || '/examples/images/clients/1.jpg'} alt="image1" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                              <div className="name">
                              <b>{test[0]?.name || 'Loading...'}</b>
                              </div>
                              <div className="details">
                              {test[0]?.customer || 'Loading...'}
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
                      <div className="col-sm-6">
                        <div className="testimonial">
                        <p>{test[1]?.testimonial || 'Loading...'}</p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                          <img src={test[1]?.image || '/examples/images/clients/1.jpg'} alt="image1" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                              <div className="name">
                              <b>{test[1]?.name || 'Loading...'}</b>
                              </div>
                              <div className="details">
                              {test[1]?.customer || 'Loading...'}
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
                        <p>{test[2]?.testimonial || 'Loading...'}</p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                          <img src={test[2]?.image || '/examples/images/clients/1.jpg'} alt="image1" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                            <div className="name">
                              <b>{test[2]?.name || 'Loading...'}</b>
                              </div>
                              <div className="details">
                              {test[2]?.customer || 'Loading...'}
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
                      <div className="col-sm-6">
                        <div className="testimonial">
                        <p>{test[3]?.testimonial || 'Loading...'}</p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                          <img src={test[3]?.image || '/examples/images/clients/1.jpg'} alt="image1" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                            <div className="name">
                              <b>{test[3]?.name || 'Loading...'}</b>
                              </div>
                              <div className="details">
                              {test[3]?.customer || 'Loading...'}
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
                        <p>{test[4]?.testimonial || 'Loading...'}</p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                          <img src={test[4]?.image || '/examples/images/clients/1.jpg'} alt="image1" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                            <div className="name">
                              <b>{test[4]?.name || 'Loading...'}</b>
                              </div>
                              <div className="details">
                              {test[4]?.customer || 'Loading...'}
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
                      <div className="col-sm-6">
                        <div className="testimonial">
                        <p>{test[5]?.testimonial || 'Loading...'}</p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                          <img src={test[5]?.image || '/examples/images/clients/1.jpg'} alt="image1" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                            <div className="name">
                              <b>{test[5]?.name || 'Loading...'}</b>
                              </div>
                              <div className="details">
                              {test[5]?.customer || 'Loading...'}
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
    );
};

export default testimonial;
