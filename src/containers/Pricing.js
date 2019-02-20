import React from 'react';

export default class Pricing extends React.Component {
  render () {
    const cardStyle = {
      display: 'inline-block',
      width: '18rem',
      padding: '10px 10px ',
      margin: '0 30px',
      }

    const divStyle = {
      padding: '10px 100px',
    }

    return (
<div className="container-fluid">
<div className="row text-center">
<div style={divStyle}>
<div className="card text-center" style={cardStyle}>
<picture>
  <img src="img/cardTop.svg" className="card-img-top" alt="..." />
</picture>
  <div className="card-body text-center">
    <h5 className="card-title">Start-Up</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-xl btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card text-center" style={cardStyle}>
<picture>
  <img src="img/cardTop.svg" className="card-img-top" alt="..." />
</picture>
  <div className="card-body">
    <h5 className="card-title">CMS</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-xl btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={cardStyle}>
<picture>
  <img src="img/cardTop.svg" className="card-img-top" alt="..." />
</picture>
  <div className="card-body text-center">
    <h5 className="card-title">e-Commerce</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-xl btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>
</div>
      )}
}
