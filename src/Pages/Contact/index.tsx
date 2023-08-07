import React, { useEffect } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { fromLonLat } from "ol/proj";

import Card from "../../components/Card";
import Header from "../../components/Header";
import "./styles.css";

const Contact: React.FC<{}> = (props) => {
  useEffect(() => {
    // Map initialization
    const map = new Map({
      target: "map-container",
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

    return () => {
      // Clean up when the component unmounts
      map.dispose();
    };
  }, []);

  return (
    <Card classes="container bg-white shadow rounded-xl lg:px-4 2xl:px-24 py-4">
      <Header title="Kontakt" classes="text-4xl font-semibold mb-4" />
      <p className="text-xl font-semibold mb-4" id="Contact">
        För att komma i kontakt med Henrik som konsult kan du ta kontakt med:
      </p>
      <p>
        Namn: <span className="font-semibold">Johan Lundborg</span>
      </p>
      <p>
        Företag: <span className="font-semibold">Tretton37</span>
      </p>
      <p>
        Adress:
        <span className="font-semibold">
          The Waterfront Building, Klarabergsviadukten 63, 111 64 Stockholm
        </span>
      </p>
      <p>
        Telefon:
        <a className="font-semibold" href="tel:+46708908222">
          +46708908222
        </a>
      </p>
      <p>
        E-post:
        <a href="mailto:johan.lundborg@tretton37.com" className="font-semibold">
          johan.lundborg@tretton37.com
        </a>
      </p>
      <p className="mt-4">
        Tveka inte att höra av dig om du har några frågor eller om du är
        intresserad av att samarbeta med Henrik. Johan ser fram emot att höra
        från dig och hjälper dig gärna vidare i processen!
      </p>
      <div id="map-container" className="w-full h-96 grayscale"></div>
    </Card>
  );
};

export default Contact;
