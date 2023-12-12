import QRCode from "react-qr-code";

const QRCodeComponent = () => {
	return (
		<div
			id="Container"
			className="p-4 bg-white"
			style={{ height: "auto", margin: "0 auto", maxWidth: 128, width: "100%" }}
		>
			<QRCode
				value="https://henrikcheng.github.io/react-ts/"
				size={256}
				style={{ height: "auto", maxWidth: "100%", width: "100%" }}
				viewBox={`0 0 256 256`}
			/>
		</div>
	);
};

export default QRCodeComponent;
