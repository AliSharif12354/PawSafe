import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { SocialIcon } from 'react-social-icons';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBFooter className='text-center hover' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <SocialIcon url="https://www.instagram.com/zamzam_bag_boutique/?hl=en" target="_blank" />
          <SocialIcon url="https://amzn.to/3QAbAmC" target="_blank" />
        </section>

        <section className=''>
          <MDBRow className='justify-content-center'>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>AlBasmala - SilentPaws</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <span>
                    Silence is Serenity
                  </span>
                </li>
                <li>
                  <span>
                    Allow us to assist your furry friends and you!
                  </span>
                </li>

              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact Us!</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='mailto:sharifali1000@gmail.com' className='text-white'>
                    EMAIL
                  </a>
                </li>
                <li>
                  647-939-5349
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Visit us on Instagram and Amazon!
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <span>© 2023:</span>
        <a className='text-white' href='/'>
          <span> AlBasmala - SilentPaws </span>
        </a>
      </div>
    </MDBFooter>
  );
}