import { MainLayout } from '../layouts/MainLayout';

import React from 'react';
import GoogleMapReact from 'google-map-react';
import Form from '../components/Form/Form';
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
      <section className="section pt-200 pb-200">
        <div className="container">
          <h1 className="h1 ta-center mb-80">Contacts</h1>

          <div className="row">
            <div className="col-12 col-md-6 mb-60">
              <Form />
            </div>
            <div className="col-12 col-md-6"></div>
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
