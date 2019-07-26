import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
// import Item from 'antd-mobile/lib/popover/Item';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 60,
      imgAry: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite={true}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.props.one.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '120px', verticalAlign: 'top' ,marginTop:'-30px'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Banner