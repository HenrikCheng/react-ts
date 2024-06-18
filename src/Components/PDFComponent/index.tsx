import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import {
	Document,
	Page,
	View,
	PDFDownloadLink,
	PDFViewer,
} from "@react-pdf/renderer";
import { globalStyles } from "./styles";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar/Sidebar";

const PDFComponent: React.FC<{}> = (props) => {
	const CVDocument = () => (
		<Document>
			<Page size="A4">
				<View style={globalStyles.full}>
					<Sidebar />
					<MainContent />
				</View>
			</Page>
		</Document>
	);

	return (
		<div className="flex flex-col w-screen gap-4">
			<PDFViewer className="h-screen w-4/5 self-center">
				<CVDocument />
			</PDFViewer>
			<PDFDownloadLink document={<CVDocument />} fileName="henrikcheng_CV.pdf">
				{({ blob, url, loading, error }) =>
					loading ? (
						"Loading document..."
					) : (
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl">
							Download CV
							<FontAwesomeIcon icon={faFileDownload} className="ml-2" />
						</button>
					)
				}
			</PDFDownloadLink>
		</div>
	);
};

export default PDFComponent;
