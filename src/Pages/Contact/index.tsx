import Card from "../../components/Card";
import Header from "../../components/Header";

const Contact: React.FC<{}> = (props) => {
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
      <p className="font-semibold">
        Telefon: <a href="tel:+46708908222">+46708908222</a>
      </p>
      <p>
        E-post:
        <span className="font-semibold">
          <a href="mailto:johan.lundborg@tretton37.com">
            johan.lundborg@tretton37.com
          </a>
        </span>
      </p>
      <p className="mt-4">
        Tveka inte att höra av dig om du har några frågor eller om du är
        intresserad av att samarbeta med Henrik. Johan ser fram emot att höra
        från dig och hjälper dig gärna vidare i processen!
      </p>
    </Card>
  );
};

export default Contact;
