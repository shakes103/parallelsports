import Image from "next/image";

const MainFour = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-1.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="link-preview portfolio-lightbox" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 1</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-2.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 3</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-3.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 2</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-4.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-4.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 2</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-5.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-5.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 2</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-6.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-6.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 3</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-7.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-7.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 1</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-8.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-8.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 3</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <Image src="assets/Image/portfolio/portfolio-9.jpg" className="Image-fluid" alt="" />
                <a href="assets/Image/portfolio/portfolio-9.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 1</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default MainFour