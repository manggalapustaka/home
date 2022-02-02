import React from "react";
import Contact from "./contact";

const Footer = () => {
    // CONTENT
    return (
        <section className="py-5 pb-0 footer bg-grey" id="kontak">
            <div className="container px-5 my-5 ">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-5 col-md-5 col-xl-5  mb-5 mb-lg-0">
                        <h5 class="text-uppercase mb-4 font-weight-bold text-dark">
                            Profile
                        </h5>
                        <div className="footer-link d-block text-secondary ">
                            <p>
                                {" "}
                                <i class="fas fa-map-marker-alt mr"> </i> Dus.
                                Manggal RT 17/ Rw 06 Des. Simo Kec. Simo Kab.
                                Boyolali
                            </p>
                            <p>
                                {" "}
                                <i class="fab fa-whatsapp mr"></i> 08153969986
                            </p>
                            <p>
                                {" "}
                                <i class="fas fa-envelope mr"></i>{" "}
                                manggalapustaka@gmail.com
                            </p>
                            <div className="col-lg-6 col-md-6 col-xl-6  mb-5 mb-lg-0">
                                <a
                                    class="btn btn-outline-primary btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class=" fab fa-facebook-square"></i>
                                </a>
                                <a
                                    class="btn btn-outline-dark btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a
                                    class="btn btn-outline-danger btn-floating m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 offset-lg-1 col-lg-5 col-xl-5 mb-5">
                        <h5 class="text-uppercase mb-4 font-weight-bold text-dark">
                            Hubungi Kami
                        </h5>
                        <form
                            action="https://formsubmit.co/7937f2533162208d79e89227166e58de"
                            method="POST"
                        >
                            <input type="hidden" name="_honey" value="false" />

                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />
                            <input
                                type="hidden"
                                name="_next"
                                value="https://manggalapustaka.github.io/home/#kontak"
                            />
                            <div class="mb-3">
                                <label for="fullname" class="form-label ">
                                    Full Name
                                </label>
                                <input
                                    name="name"
                                    class="form-control"
                                    id="fullname"
                                    placeholder="your name"
                                    required
                                ></input>
                            </div>
                            <div class="mb-3">
                                <label for="emailinfo" class="form-label ">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="emailinfo"
                                    placeholder="your email"
                                    required
                                ></input>
                            </div>
                            <div class="mb-3">
                                <label for="massage" class="form-label">
                                    Massage
                                </label>
                                <textarea
                                    placeholder="Entry massage..."
                                    class="form-control"
                                    id="massage"
                                    name="massage"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <Contact />
                        </form>
                    </div>
                </div>
            </div>
            <div class="text-center px-5 copyright text-secondary ">
                © 2022 Manggala Hydrofarm. All rights reserved
            </div>
            <div className="border-footer  "></div>
        </section>
    );
};

export default Footer;