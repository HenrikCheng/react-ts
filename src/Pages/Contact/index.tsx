import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";

const Contact: React.FC<{}> = (props) => {
  return (
    <Card>
      <div className="">
        <Header title="Kontakt" classes="text-4xl font-semibold mb-4" />
        <p className="text-xl font-semibold mb-4">
          För att komma i kontakt med Henrik som konsult kan du ta kontakt med:
        </p>
        <p>
          Namn: <span className="font-semibold">Johan Lundborg</span>
        </p>
        <p>
          Företag: <span className="font-semibold">Tretton37</span>
        </p>
        <p>
          Telefon: <span className="font-semibold">+46708908222</span>
        </p>
        <p>
          E-post:
          <span className="font-semibold">johan.lundborg@tretton37.com</span>
        </p>
        <p className="mt-4">
          Tveka inte att höra av dig om du har några frågor eller om du är
          intresserad av att samarbeta med Henrik. Johan ser fram emot att höra
          från dig och hjälper dig gärna vidare i processen!
        </p>
      </div>
    </Card>
  );
};

export default Contact;
