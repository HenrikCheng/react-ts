import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// import {
//   FormattedDate,
//   FormattedNumber,
//   FormattedPlural,
//   useIntl,
// } from "react-intl";
// import { FormattedMessage } from "react-intl";

const Footer: React.FC<{}> = (props) => {
  const currentYear = new Date().getFullYear();
  // const intl = useIntl();
  return (
    <footer className="w-full fixed bottom-0 -z-10 bg-slate-200 pt-20 pb-4 text-lg font-semibold">
      <div className="space-x-4 flex justify-center w-full">
        <a
          href="https://www.linkedin.com/in/henrik-cheng/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline underline-offset-2"
        >
          LinkedIn
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="ml-1 fa-xs"
          />
        </a>
        <div>|</div>
        <a
          href="https://www.tretton37.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline underline-offset-2"
        >
          tretton37
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="ml-1 fa-xs"
          />
        </a>
        <div>|</div>
        <a
          href="https://www.tretton37.com/specialists/henrik-cheng"
          target="_blank"
          rel="noreferrer"
          className="hover:underline underline-offset-2"
        >
          Profile
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="ml-1 fa-xs"
          />
        </a>
      </div>
      <div>&copy; {currentYear} Henrik Cheng. All rights reserved.</div>
      {/* <p>
        <FormattedMessage id="learn_to" />
      </p>
      <p>
        <FormattedMessage id="price_display" values={{ n: 59.99 }} />
      </p>
      <p>
        <FormattedMessage id="price_display" values={{ n: 59.99 }} />
      </p>
      <p>
        <FormattedMessage id="number_display" values={{ n: 2000 }} />
      </p>
      <p>
        <FormattedMessage id="start_today" values={{ d: new Date() }} />
      </p>
      <FormattedDate value={Date.now()} />*
      <FormattedNumber value={2000} />*
      <FormattedPlural value={5} one="1 click" other="5 clicks" />
      <input placeholder={intl.formatDate(Date.now())} /> */}
    </footer>
  );
};

export default Footer;
