import React from 'react'

export default function Topbar() {
  return (
    <div className="topbar-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-5 tob-contact-row">
        <div className="topbar-contact">
          <ul>
            <li><i className="bx bxs-phone" /><a href="tel:+17632275032">+1 763-227-5032</a></li>
            <li><i className="bx bxs-envelope" /><a href="mailto:info@example.com">info@example.com</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
        <div className="topbar-social">
          <ul>
            <li>
              <a href="#"><i className="bx bxl-instagram" /></a>
            </li>
            <li>
              <a href="#"><i className="bx bxl-facebook" /></a>
            </li>
            <li>
              <a href="#"><i className="bx bxl-twitter" /></a>
            </li>
            <li>
              <a href="#"><i className="bx bxl-whatsapp" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6">
        <div className="topbar-select">
          <select>
            <option value={0}>ENG</option>
            <option value={1}>BAN</option>
            <option value={2}>FSP</option>
            <option value={3}>CHI</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
