import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
// import { Link } from "react-router-dom";
// import logo from "./img/logo.png";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start  mt-5  bg-dark text-white  "
      //   style={{ backgroundColor: "#d9d9d9" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-center p-4    ">
        <div className="me-5 d-none d-lg-block ">
          <span>Siguenos en nuestras redes sociales</span>
        </div>
        <div>
          <a href="" className="me-4 link-secondary">
            <Facebook className="text-white" />
          </a>
          <a href="" className="me-4 link-secondary">
            <Twitter className="text-white" />
          </a>

          <a href="" className="me-4 link-secondary">
            <Instagram className="text-white" />
          </a>
        </div>
      </section>

      <section className=" ">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <img
                src={logo}
                alt=""
                className="  "
                style={{ maxWidth: "300px" }}
              /> */}
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis aliquid, ullam repellendus explicabo omnis ad animi
                quis in dolor, consequatur laudantium, quibusdam vero fuga
                laborum rem. Illo omnis velit eligendi?
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navegacion</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/#propiedades" className="text-reset">
                  Propiedades
                </a>
              </p>
              <p>
                <a href="/#agentes" className="text-reset">
                  Agentes
                </a>
              </p>
              <p>
                <a to="/contacto" className="text-reset">
                  Contacto
                </a>
              </p>
            </div>

            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div> */}

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary text-center"></i>
                Dirección: 12, Samuel Lewis, PH COMOSA, Panamá
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                juanseverino@leonessrealty.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i>
                Telf: +507 6525-5567
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i>
                Telf: + 507 6525-5827
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i> Telf: +
                +507-300-0099
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <WhatsApp style={{ fontSize: "2rem" }} />
        <p>
          <b>Respuestas confiables</b>
        </p>
      </div>

      <div className="text-center p-4">
        © 2022 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://www.leonessrealtysa.com/"
        >
          leonessrealtysa.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
