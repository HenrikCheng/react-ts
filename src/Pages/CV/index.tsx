import { FormattedMessage } from "react-intl";

import Card from "../../components/Card";
import Header from "../../components/Header";
import PDFComponent from "../../components/PDFComponent";

const CV: React.FC<{}> = () => {
	return (
		<Card>
			<div id="CV">
				<Header classes="text-4xl font-semibold mb-4">
					<FormattedMessage id="cv_title" />
				</Header>

				<PDFComponent />
			</div>
		</Card>
	);
};

export default CV;
