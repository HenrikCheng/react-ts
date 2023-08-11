import { FormattedMessage } from "react-intl";
import Header from "../../components/Header";
import Text from "../../components/Text";
import AboutImage from "../../images/AboutImage.jpeg";
import BikeImage from "../../images/BikeImage.jpg";
import Card from "../../components/Card";

const About: React.FC<{}> = (props) => {
  const pillClasses =
    "inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 whitespace-nowrap";
  return (
    <Card classes="flex flex-col xl:flex-row container xl:justify-center relative bg-white shadow rounded-xl overflow-hidden">
      <div className="sm:px-4 xl:px-24 py-4 xl:order-2">
        <div id="AboutMe">
          <Header classes="text-4xl font-semibold mb-4">
            <FormattedMessage id="about_title" />
          </Header>
          <Text>
            <FormattedMessage id="about_text_1" />
          </Text>
          <Text>
            <FormattedMessage id="about_text_2" />
          </Text>
          <Text>
            <FormattedMessage id="about_text_3" />
          </Text>
          <Text>
            <FormattedMessage id="about_text_4" />
          </Text>
        </div>

        <div className="flex flex-row justify-center">
          <span className={`${pillClasses} bg-blue-500`}>
            <FormattedMessage id="about_keyword_1" />
          </span>
          <span className={`${pillClasses} bg-slate-800`}>
            <FormattedMessage id="about_keyword_2" />
          </span>
          <span className={`${pillClasses} bg-slate-500`}>
            <FormattedMessage id="about_keyword_3" />
          </span>
          <span className={`${pillClasses} bg-slate-200 text-slate-900`}>
            <FormattedMessage id="about_keyword_4" />
          </span>
          <span className={`${pillClasses} bg-rose-500`}>
            <FormattedMessage id="about_keyword_5" />
          </span>
        </div>
      </div>
      <img
        className="w-1/2 xl:w-1/3 object-cover xl:order-1 rounded-bl-xl xl:rounded-l-xl object-position"
        src={AboutImage}
        alt="Portrait of Henrik"
      />
      <img
        className="w-1/2 xl:w-1/3 object-cover xl:order-3 absolute xl:static bottom-0 right-0 rounded-br-xl xl:rounded-r-xl object-left"
        src={BikeImage}
        alt="Portrait of Henrik"
      />
    </Card>
  );
};

export default About;
