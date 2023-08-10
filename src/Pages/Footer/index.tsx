import React from "react";
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
    <div className="w-full fixed bottom-0 -z-10 bg-slate-200 pt-20 pb-4">
      &copy; {currentYear} Henrik Cheng. All rights reserved.
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
    </div>
  );
};

export default Footer;
