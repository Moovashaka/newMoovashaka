import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col socialtwit">
              <a href="https://twitter.com/Moova_Shaka">
              <i className="fa fa-twitter-square fa-2x"></i>
              </a>
            </div>
            <div className="col socialinsta">
              <i className="fa fa-instagram fa-2x"></i>
            </div>
            <div className="col sociallinkd">
            <a href="https://www.linkedin.com/company/moovashaka/about/?viewAsMember=true">
              <i className="fa fa-linkedin-square fa-2x"></i>
            </a>
            </div>
          </div>
          <hr />
        </div>
       <div className="text-center">
        <p>&copy;MoovaShaka {(new Date().getFullYear())}</p>
      </div>
      <hr />
      </div>
    )
  }
}
