import { MainLayout } from '../layouts/MainLayout';

import React from 'react';
import GoogleMapReact from 'google-map-react';
import Hero from "../components/Hero/Hero";
import Ticker from "../components/Ticker/Ticker";
import Image from "next/image";
import SalesManager from "../components/SalesManager/SalesManager";
import Social from "../components/Social/Social";
import FormContacts from "../components/FormContacts/FormContacts";
import LearnPractices from '../components/LearnPractices/LearnPractices';
import styles from "/styles/contacts.module.scss";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Contacts() {
  const defaultProps = {
    center: {
      lat: 47.50654193198983,
      lng: 19.04973876567707,
    },

    zoom: 15,
  };
  const NY = {
    center: {
        lat:40.74313548821765,
        lng: -73.9904050648658
    },

    zoom: 15,
  };

  return (
    <MainLayout
      title={'High ROI Performance marketing services - LTV:CAC agency'}
      description={
        'We help startups and property businesses grow digital marketing from idea to xx.xxx customers with help digital channels, data analysis and customer research'
      }>
      <Hero
          title={'Contacts'}
          subtitle={'Our contacts features only expert content from our team of experts.'}
          imageUrls={{ desktop: '/img/hero/11.jpg', mobile: '/img/hero/11mob.jpg' }}
      />
      <Ticker />
      <SalesManager />
      <FormContacts />
      <Social />

      <LearnPractices />

      <section className="section pt-100 pb-100">
        <div className="container">
            <div className="row">
                <div className={`col-12 d-flex ${styles.maps}`}>
                  <div className={styles.container}>
                      <div className={styles.map}>
                          <GoogleMapReact
                              bootstrapURLKeys={{ key: '' }}
                              defaultCenter={NY.center}
                              defaultZoom={NY.zoom}>
                              <AnyReactComponent lat={40.74313548821765} lng={-73.9904050648658} text="My Marker" />
                          </GoogleMapReact>
                      </div>
                      <div className={`d-flex justify-content-center ${styles.label}`}>
                          <div className={styles.dot}>
                              <Image src="/img/contacts/maps.svg"
                                     width={23}
                                     height={33}
                                     layout="responsive"
                              />
                          </div>
                          <span className={`col-5 ${styles.address}`}>19 W 24th Street, New York NY 10010, United States</span>
                      </div>
                  </div>

                  <div className={styles.container}>
                      <div className={styles.map}>
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: '' }}
                          defaultCenter={defaultProps.center}
                          defaultZoom={defaultProps.zoom}>
                          <AnyReactComponent lat={47.50654193198983} lng={19.04973876567707} text="My Marker" />
                        </GoogleMapReact>
                      </div>
                      <div className={`d-flex justify-content-center ${styles.label}`}>
                          <div className={styles.dot}>
                              <Image src="/img/contacts/maps.svg"
                                     width={23}
                                     height={33}
                                     layout="responsive"
                              />
                          </div>
                          <span className={`col-5 ${styles.address}`}>1054 Budapest, Honved utca 8. 1. em. 2 SELLION Europe Kft. (HU29017043)</span>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </MainLayout>
  );
}
