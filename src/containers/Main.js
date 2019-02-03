import React from 'react'
import { ContactForm } from '../components/contactForm.js'
// import { Fade } from '../components/fade.js'


export default class Main extends React.Component {
    state = {
    fields: {}
  };
  onChange = updatedValue => {
    this.setState({  fields: {
      ...this.state.fields,
      ...updatedValue }});
  }
  render () {
    return (
<div>
  <header id="page-top">
    <div className="header-content">
      <div className="header-content-inner">
          <h1 id="homeHeading">Get excited about WebApps</h1>
          <hr />
          <p>MoovaShaka will help you build, refine &amp; define your virtual presence</p>
          <div id="accordion" className="btn-text accordion">
            <div className="card slide-in-left">
              <div className="card-header" id="headingOne">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h3>Loads at lightning speed....<img src="img/plus.png" alt="website development"></img></h3>
                  </button>
              </div>

              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
    <h4>Search engines &amp; customers love fast, make Google (and the other search engines!) happy and get rewarded with improved rankings and happier users.</h4>
                </div>
              </div>
            </div>
            <div className="card slide-in-left-delay2">
              <div className="card-header" id="headingTwo">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h3>Add to homescreen - just like a native app!...<img src="img/plus.png" alt="website development"></img></h3>
                  </button>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                  <h4>Progressive WebApps can be added to a users homescreen just like a native app - complete with splashscreen and your app's logo.
                   And with users increasingly turning away from the App Stores* native apps due to slow download times and memory hogging. A WebApp
                  could be the perfect solution for you and your customers.</h4>
                </div>
              </div>
            </div>
            <div className="card slide-in-left-delay4">
              <div className="card-header" id="headingThree">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h3>Works offline...<img src="img/plus.png" alt="website development"></img></h3>
                  </button>
            </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                  <h4>Your WebApp will update behind the scenes automagically as and when the user has an internet connection,
                  but will work just fine with the data it has in the meantime, meaning users on a 3g connection, older handset
                  or with an intermittant connection won't feel frustrated by the experience.</h4>
                </div>
              </div>
            </div>
          </div>



          <hr />
          <a href="#about" className="btn btn-primary btn-xl page-scroll">Find Out More</a>
        </div>
      </div>
  </header>
  <section className="bg-primary" id="about">
    <div className="d-flex text-center h-100">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-lg-offset-2 text-center">
          <h2 className="section-heading">Responsive mobile-friendly Landing Pages, Web-apps, Blogs, CMS, E-Commerce, SEO & more!</h2>
          <hr className="light" />
        </div>
      </div>
      <div className="row">
        <div className="container">
        <div className="img-responsive col-sm-4 aboutcontainer">
        <div className="card">
        <img className="card-img-top" src="/img/mockwhite2.svg" alt="Card image cap" />
        <div className="card-body">
        <span className="card-text">Send your design, idea, mock-up, sketch, PDF, napkin, whatever.....</span>
        </div>
        </div>
      </div>
      <div className="img-responsive col-sm-4 aboutcontainer">
        <div className="card">
        <img className="card-img-top" src="/img/text_editor.png" alt="Card image cap" />
        <div className="card-body">
        <span className="card-text">We'll turn it into code.....</span>
        </div>
        </div>
      </div>
      <div className="img-responsive col-sm-4 aboutcontainer">
        <div className="card">
        <img className="card-img-top" src="/img/blog.png" alt="Card image cap" />
        <div className="card-body">
        <span className="card-text">and present back your finished design, ready to host wherever you wish, or talk to us about hosting.</span>
        </div>
      </div>
    </div>
  </div>
</div>


      <hr className="light" />
      <div className="container">
        <div className="row">
          <p className="text-faded">At MoovaShaka we have everything needed to get your new web project up and running in no time. We are a multi-disciplinary team
          with all the skills &amp; know-how to really get your new project off to a flying start. Simply fill in the contact form below, send mail or phone with
          an outline of your requirements and we can arrange a convenient time to iron out the detail. </p>
          <p className="text-faded">Need modifications to your existing development? Get in touch &amp; let's see how we can be of service.</p>
          <a href="#services" className="page-scroll btn btn-default btn-xl sr-button">Get Started!</a>
        </div>
      </div>
    </div>
    </section>

  <section id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">At Your Service</h2>
          <hr className="primary" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-diamond text-primary sr-icons" />
            <h3>Bespoke Designs</h3>
            <p className="text-muted">Or modify what you already have - HTML5, CSS3, JavaScript, PHP &amp; ReactJS specialities. </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-paper-plane text-primary sr-icons" />
            <h3>Ready to Shop?</h3>
            <p className="text-muted">or ready to sell, whatever you have in mind - together we can bring it to the world.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />
            <h3>Up to Date</h3>
            <p className="text-muted">Our Devs upskill regularly to keep abroad of the latest technologies.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-heart text-primary sr-icons" />
            <h3>Made with Love</h3>
            <p className="text-muted">We approach our creations with passion and treat our clients with respect</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="no-padding" id="portfolio">
    <div className="container-fluid">
      <div className="row no-gutter popup-gallery">
        <div className="col-lg-4 col-sm-6">
          <a href="https://blooming-tearaways.netlify.com/" target="_blank" rel="noopener noreferrer" className="portfolio-box">
            <img src="img/portfolio/thumbnails/bloomin.png" className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Brochure Site
                </div>
                <div className="project-name">
                    Bloomin Tearaways
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a href="https://autoview.netlify.com/" target="_blank" rel="noopener noreferrer" className="portfolio-box">
            <img src="img/portfolio/thumbnails/aviewth.png" className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Portfolio Site
                </div>
                <div className="project-name">
                    Autoview
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a href="http://www.ribblevalleytyreandautoservices.co.uk" target="_blank" rel="noopener noreferrer" className="portfolio-box">
            <img src="img/portfolio/thumbnails/rvtathumb.png" className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Single Page WebApp
                </div>
                <div className="project-name">
                    Ribble Valley Tyre and Auto Services
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <aside className="bg-dark">
    <div className="container text-center">
      <div className="call-to-action">
        <h2>Free consultation with MoovaShaka</h2>
        <hr />
        <p>We believe in gathering a full understanding of our clients, their needs
        and business ambitions. Leave your contact info and a convenient time to talk,
        pour a coffee and together we can turn your vision into reality.
        </p>
        <img src="img/logobanner.png" className="img-responsive" alt="" />
        <a href="#contact" className="page-scroll btn btn-default btn-xl sr-button">Talk to us Now!</a>
      </div>
    </div>
  </aside>

  <section id="contact" className="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 text-center">
          <h2 className="section-heading">Let's Get In Touch</h2>
          <hr classNameName="primary" />
            <p>Ready to start your next project with us? That's great! Give us a call or drop us mail and we will get back to you as soon as possible.</p>
        </div>
        <div className="col-lg-4 col-lg-offset-2 text-center">
          <i className="fa fa-phone fa-3x sr-contact" />
          <br />
          <a href="tel:+44-203-0123-231">+44 (203) 0123 231</a>
        </div>
        <div className="col-lg-4 text-center">
          <i className="fa fa-envelope-o fa-3x sr-contact" />
          <p><a href="mailto:info@moovashaka.co.uk">feedback@moovashaka.co.uk</a></p>
        </div>
      </div>
    </div> {/* Close container */}
    <div className="container">
      <div className="row">
        <div className="col align-items-end contactForm" />
      </div>
    </div>
<ContactForm onChange={fields => this.onChange(fields)} />
</section>
</div>
    )
  }
}
