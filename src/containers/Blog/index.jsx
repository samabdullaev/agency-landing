import React from "react";
import Title from "../../components/Title";

function Blog() {
  return (
    <section className="py-20" id="blog">
      <div className="container">
        <Title title="Blog" page="Interesting Articles" isCenter={true} />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-6">
          <div
            className="shadow-md rounded-md"
            data-aos="fade-up"
            data-aos-duration={500}
          >
            <div className="relative">
              <div className="absolute end-4 top-3">
                <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-black">
                  Design
                </span>
              </div>
              <img src="assets/images/hero/coworking1.jpg" />
              <div className="absolute -bottom-5">
                <svg
                  className="w-full h-14 text-white"
                  viewBox="0 0 528 40"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="shape"
                    transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)"
                  >
                    <path
                      d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z"
                      transform="translate(7.629395E-06 6.103516E-05)"
                      fill="currentColor"
                      stroke="none"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm">11 March, 2020</p>
              <h4 className="text-lg hover:text-blue-700 font-semibold my-2">
                <a href="#">Top 10 design inspirations to follow</a>
              </h4>
              <p className="text-slate-400 my-2">
                Single page websites are taking over the world, and that's why I
                would like you to present the best ...
                <a href="#" className="text-slate-800 hover:text-blue-700">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div
            className="shadow-md rounded-md"
            data-aos="fade-up"
            data-aos-duration={700}
          >
            <div className="relative">
              <div className="absolute end-4 top-3">
                <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-primary">
                  Development
                </span>
              </div>
              <img src="assets/images/hero/coworking2.png" />
              <div className="absolute -bottom-5">
                <svg
                  className="w-full h-14 text-white"
                  viewBox="0 0 528 40"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="shape"
                    transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)"
                  >
                    <path
                      d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z"
                      transform="translate(7.629395E-06 6.103516E-05)"
                      fill="currentColor"
                      stroke="none"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm">12 March, 2020</p>
              <h4 className="text-lg hover:text-blue-700 font-semibold my-2">
                <a href="#">Top 10 design inspirations to follow</a>
              </h4>
              <p className="text-slate-400 my-2">
                We have shortlisted the best WordPress themes for alcohol
                production, distribution, and selling to...
                <a href="#" className="text-slate-800 hover:text-blue-700">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div
            className="shadow-md rounded-md"
            data-aos="fade-up"
            data-aos-duration={900}
          >
            <div className="relative">
              <div className="absolute end-4 top-3">
                <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-black">
                  Design
                </span>
              </div>
              <img src="assets/images/hero/coworking4.jpg" />
              <div className="absolute -bottom-5">
                <svg
                  className="w-full h-14 text-white"
                  viewBox="0 0 528 40"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="shape"
                    transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)"
                  >
                    <path
                      d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z"
                      transform="translate(7.629395E-06 6.103516E-05)"
                      fill="currentColor"
                      stroke="none"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm">13 March, 2020</p>
              <h4 className="text-lg hover:text-blue-700 font-semibold my-2">
                <a href="#">Top 10 design inspirations to follow</a>
              </h4>
              <p className="text-slate-400 my-2">
                The following Italian restaurant WordPress themes come with the
                powerful drag-n-drop...
                <a href="#" className="text-slate-800 hover:text-blue-700">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
