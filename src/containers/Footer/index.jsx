import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 pt-14 pb-5">
      <div className="container">
        <div className="grid grid-cols-4 gap-14">
          <div className="xl:col-span-1 col-span-4">
            <a href="index.html">
              <img src="assets/images/logo-dark.png" className="h-8" />
            </a>
            <p className="text-gray-500/80 mt-5">
              300 Park Avenue, 12th Floor New York, NY 10022
            </p>
            <p className="text-gray-500/80 mt-5">
              1499 Burwell Heights Road Port Arthur Meadow Nashville, TX 77642
            </p>
          </div>
          <div className="xl:col-span-3 col-span-4 xl:mx-20">
            <div className="flex flex-col sm:flex-row gap-14 flex-wrap justify-between">
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3">About</h5>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Home</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Portfolio</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Resources</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Blog</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3">Company</h5>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">About</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Career</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Clients</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3">Get in touch</h5>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">hello@Prompt.com</a>
                  </div>
                  <div className="flex sm:justify-center gap-7">
                    <div>
                      <a href="#">
                        <svg
                          className="w-5 h-5 text-slate-400 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <svg
                          className="w-5 h-5 text-slate-400 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <svg
                          className="w-5 h-5 text-slate-400 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x={2} y={9} width={4} height={12} />
                          <circle cx={4} cy={4} r={2} />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <svg
                          className="w-5 h-5 text-slate-400 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3">Languages</h5>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">Francais</a>
                  </div>
                  <div className="text-gray-500/80">
                    <a href="javascript:void(0);">English</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b my-5" />
        <div className="text-center">
          <p className="text-gray-500/80 text-sm">
            © Prompt. All rights reserved. Crafted by{" "}
            <a
              href="#"
              className="text-gray-800 hover:text-primary transition-all"
            >
              Coderthemes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
