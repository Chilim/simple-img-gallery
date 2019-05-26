import React from 'react';
import cn from 'classnames';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idx: 0 };
    this.images = this.props.images;
    this.length = this.props.images.length;
  }

  slideLeft = (e) => {
    e.preventDefault();
    const { idx } = this.state;
    const newIdx = (idx - 1) < 0 ? this.length - 1 : idx - 1;
    this.setState({ idx:  newIdx });
  }

  slideRight = (e) => {
    e.preventDefault();
    const { idx } = this.state;
    const newIdx = (idx + 1) > (this.length - 1) ? 0 : idx + 1;
    this.setState({ idx:  newIdx });
  }

  renderImgs = (imgs) => {
    const images = this.images;
    const { idx } = this.state;
    return (
      images.map((img, imgIdx) => {
        const imgClass = cn({
          'carousel-item': true,
          active: imgIdx === idx,
        });
        return (
          <div className={imgClass} key={imgIdx}>
            <img alt="" className="d-block w-100" src={img} />
          </div>
        );
      }));
  }

  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {this.renderImgs()}
        </div>
        <a className="carousel-control-prev" onClick={this.slideLeft} href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" onClick={this.slideRight} href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}