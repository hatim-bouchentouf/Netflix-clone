import React from "react";
import { Link } from "react-router-dom";
import Img from "../Images/2.jpg";
function RowLandingPage() {
  return (
    <header
      className="head"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Img})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="logo">
        <img
          className="nav_logo"
          src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-png-transparent.png?fbclid=IwAR1tVDfn7SlV4Di7Xix7j6PO_Hmw-hdu8bSsTOUZAcM5Sz__7lF9hqFIqig"
          alt="Netflix Logo"
        />
      </div>
      <div className="header_contents">
        <div className="header_title">
          <h1>Films, séries TV et bien plus en illimité.</h1>
        </div>
        <div className="subTitle">
          <h2>Où que vous soyez. Annulez à tout moment.</h2>
        </div>
        <div className="mailForm">
          <div className="emailFormTitle">
            <h3>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </h3>
          </div>
          <div className="inputEmail">
            <input
              type="email"
              name="email"
              className="email"
              placeholder="Adresse e-mail"
            />
            <div className="header_button">
              <Link to="/App">
                <button className="btn">COMMENCER ...</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default RowLandingPage;
