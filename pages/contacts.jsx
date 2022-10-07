import { MainLayout } from '../layouts/MainLayout';

import React from 'react';
import GoogleMapReact from 'google-map-react';
import Form from '../components/Form/Form';
import Hero from "../components/Hero/Hero";
import Ticker from "../components/Ticker/Ticker";
import Image from "next/image";
import SalesManager from "../components/SalesManager/SalesManager";
import Social from "../components/Social/Social";
import FormContacts from "../components/FormContacts/FormContacts";
import LearnPractices from '../components/LearnPractices/LearnPractices';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Contacts() {
  const defaultProps = {
    center: {
      lat: 5.051701,
      lng: 97.318123,
    },

    zoom: 7,
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

      <section className="section pt-200 pb-200">
        <div className="container">


          
            

            <div className="row mt-3 mb-4">

            </div>

          <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}>
              <AnyReactComponent lat={5.051701} lng={97.318123} text="My Marker" />
            </GoogleMapReact>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
