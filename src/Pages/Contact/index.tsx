import { useEffect } from "react";
import { FormattedMessage } from "react-intl";

import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";

import Card from "../../components/Card";
import Header from "../../components/Header";
import "./styles.css";

const Contact: React.FC<{}> = (props) => {
  useEffect(() => {
    // Map initialization
    const map = new Map({
      target: "map-container",
      // controls: [],
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([18.054974, 59.330268]),
        zoom: 16,
      }),
    });

    // Create a vector source and layer for the marker
    const markerSource = new VectorSource();
    const markerLayer = new VectorLayer({
      source: markerSource,
    });

    // Create a marker feature at coordinate
    const markerFeature = new Feature({
      geometry: new Point(fromLonLat([18.0552, 59.3304])),
    });

    // Style for the marker icon
    const markerStyle = new Style({
      image: new Icon({
        src: "https://openlayers.org/en/latest/examples/data/icon.png",
        scale: 1,
      }),
    });

    markerFeature.setStyle(markerStyle);

    // Add the marker feature to the marker source
    markerSource.addFeature(markerFeature);

    // Add the marker layer to the map's layers
    map.addLayer(markerLayer);

    return () => {
      // Clean up when the component unmounts
      map.dispose();
    };
  }, []);

  return (
    <Card classes="container bg-white shadow rounded-xl lg:px-4 2xl:px-24 py-4">
      <Header classes="text-4xl font-semibold mb-4">
        <FormattedMessage id="contact_title" />
      </Header>
      <p className="text-xl font-semibold mb-4" id="Contact">
        <FormattedMessage id="contact_subtitle" />
      </p>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex flex-col justify-center items-center w-full pb-4">
          <p>
            <span className="font-semibold">Johan Lundborg</span>
          </p>
          <p>
            <FormattedMessage id="contact_company" />
            <span className="font-semibold">Tretton37</span>
          </p>
          <div>
            <FormattedMessage id="contact_adress" />
            <p className="font-semibold">The Waterfront Building</p>
            <p className="font-semibold">
              Klarabergsviadukten 63, 111 64 Stockholm
            </p>
          </div>
          <p>
            <FormattedMessage id="contact_phone" />
            <a className="font-semibold" href="tel:+46708908222">
              +46708908222
            </a>
          </p>
          <p>
            <FormattedMessage id="contact_email" />
            <a
              href="mailto:johan.lundborg@Tretton37.com"
              className="font-semibold"
            >
              johan.lundborg@Tretton37.com
            </a>
          </p>
          <p className="mt-4">
            <FormattedMessage id="contact_text" />
          </p>
        </div>
        <div id="map-container" className="w-full h-96 grayscale"></div>
      </div>
    </Card>
  );
};

export default Contact;
