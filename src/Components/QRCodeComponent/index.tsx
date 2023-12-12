import QRCode from "react-qr-code";

const QRCodeComponent = () => {
	return (
		<div
			id="Container"
			className="p-4 bg-white rounded h-auto w-full"
			style={{ margin: "0 auto", maxWidth: 128 }}
		>
			<QRCode
				value="https://www.linkedin.com/in/henrik-cheng/"
				size={256}
				style={{ height: "auto", maxWidth: "100%", width: "100%" }}
				viewBox={`0 0 256 256`}
			/>
		</div>
	);
};

export default QRCodeComponent;
