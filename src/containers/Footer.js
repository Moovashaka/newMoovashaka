import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <div className="clearfix text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="socialtwit" >
              <a href="https://twitter.com/Moova_Shaka">
                <i className="fa fa-twitter-square fa-3x"></i>
              </a>
            </div>
            <div className="socialinsta">
              <a href="https://www.instagram.com/moovashaka_app_maker/">
              <i className="fa fa-instagram fa-3x"></i>
              </a>
            </div>
            <div className="sociallinkd">
            <a href="https://www.linkedin.com/company/moovashaka/about/?viewAsMember=true">
              <i className="fa fa-linkedin-square fa-3x"></i>
            </a>
            </div>
          </div>
          <hr />
        </div>
       <div className="text-center">
        <h4>&copy;MoovaShaka {(new Date().getFullYear())}</h4>
          <hr />
        <div className="container clearfix">
        <div className="row">
        <div className="col footerlinks">
        <a href="/privacy"><h5 className="text-muted">Privacy Policy</h5></a>
        </div>
        <div className="col footerlinks">
        <a href="/about"><h5 className="text-muted">About Us</h5></a>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
