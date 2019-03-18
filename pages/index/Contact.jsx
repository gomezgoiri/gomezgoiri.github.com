import React from 'react'

const noneDisplay = { display: 'none' }

const Contact = () => (
  <div className="row">
    <div className="col-sm-12">
      <h2>Contact</h2>
    </div>
    <div className="col-sm-8">
      <blockquote>
        <p>
          <span itemProp="name">Aitor Gómez-Goiri</span> (
          <span itemProp="email">aitor.gomez [at] ikerlan.es</span>
          )
          <br />
          <span
            itemProp="worksFor"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <span
              itemProp="department"
              itemScope
              itemType="http://schema.org/Organization"
              style={noneDisplay}
            >
              <span itemProp="name">
                Information and communications technology
              </span>
              <span
                itemProp="department"
                itemScope
                itemType="http://schema.org/Organization"
              >
                <span itemProp="name">Big Data Architectures</span>
              </span>
            </span>
            <a href="http://www.ikerlan.es" itemProp="url">
              <span itemProp="name">IK4-IKERLAN</span>
            </a>
          </span>
          <br />
          <span
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            <span itemProp="streetAddress">
              Pº. J. Mª. Arizmendiarrieta, 2
              <br />
              Arrasate-Mondragón
              <br />
              20500
              <br />
              Spain
            </span>
            <br />
            Tel:
            <span itemProp="telephone">+34 943 712 400</span>
            <br />
            Fax:
            <span itemProp="faxNumber">+34 943 796 944</span>
          </span>
        </p>
      </blockquote>
    </div>
    <div className="col-sm-4 text-right">
      <img
        src="http://tinyurl.com/jlbwljw"
        alt="Scan it and add me to your contacts!"
      />
    </div>
  </div>
)

export default Contact
