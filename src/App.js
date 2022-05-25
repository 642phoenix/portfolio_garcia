import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />

        <h1>BONACHON</h1> */}

        {/* Code from template bootstrap */}

        <div className="d-flex flex-column">

          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">JORGE GARCIA</a></h1>
            <div className="social-links mt-3 text-center">
              {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
              <a href="#" className="github"><i className="bx bxl-github"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>{/* END OF HEADER */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Jorge Garcia</h1>
          <p>I'm <span className="typed" data-typed-items="Designer, Developer, Photographer"></span></p>
        </div>
      </section>
      {/* <!-- End Hero --> */}



      {/* <main id="main"> */}

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container">

          <div className="section-title">
            <h2>About</h2>
            <p>“ In order, to satisfy my own curiosity, and thirst for knowledge, experience and most of all success, on top of the fact that I take great pride in everything I do, for those reasons alone , should reveal to you the extent of to which I am willing to go to be one of your most dedicated team members because I’m likely already the most motivated . Thank you for the opportunity, I’m here to help. “</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>UI/UX Designer &amp; Web Developer.</h3>
              <p className="fst-italic">
                Highly motivated, team player,<br /> and perseverance
                are three of my most <br />distinguishing traits.
                I am a Full Stack Web Developer <br />with a
                focus on E-commerce and Mobile Web Applications,<br />
                Based in Phoenix Arizona

              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li> */}
                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(602) 497 8967</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Phoenix, AZ</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>None</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>garcjorge1117@gmail.com</span></li>
                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> */}
                  </ul>
                </div>
              </div>
              <p>
                SOME PARAGRAPH
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Skills Section ======= -->/ */}
      <section id="skills" className="skills section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Skills</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row skills-content">

            <div className="col-lg-6" data-aos="fade-up">

              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">JavaScript <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

              <div className="progress">
                <span className="skill">PHP <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Photoshop <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Skills Section --> */}


    </div>
  );
}

export default App;
