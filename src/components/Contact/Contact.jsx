import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <div>
      <section  className="contact section" id="contact">
      <div className="contact__container container grid">
        <h2 className="section__title">Contact Now</h2>

        <div className="contact__content grid">
          <div className="contact__data grid">
            <div>
              <h3 className="contact__title">Write us</h3>

              <div className="contact__social">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className="ri-whatsapp-fill"></span>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className="ri-facebook-circle-fill"></span>
                </a>
                
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className="ri-telegram-fill"></span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="contact__title">Call us and Order</h3>

              <address className="contact__info">
                +00-987-7654-321
                +11-012345
              </address>
            </div>

            <div>
              <h3 className="contact__title">Find us here</h3>

              <address className="contact__info">
                Mumbai, India.
                Bhayandar - 401101.
              </address>
            </div>
          </div>

          <div className="contact__image">
            <img 
              src={assets.contact_man} 
              alt="contact" 
              className="contact__img"
            />
          </div>
        </div>
        
        <img 
          src={assets.sticker_burger}
          alt="burger sticker" 
          className="contact__sticker_1"
        />
        <img 
          src={assets.sticker_soda}
          alt="soda sticker" 
          className="contact__sticker_2"
        />
      </div>
    </section>
    </div>
  )
}

export default Contact
