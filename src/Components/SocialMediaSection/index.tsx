import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../app/hooks";
import { selectTextColor } from "../../Pages/Hero/colorSlice";

type SocialMediaSectionProps = {
	displayName?: boolean;
	textColor?: string;
};

const SocialMediaSection = ({ displayName }: SocialMediaSectionProps) => {
	const textColor = useAppSelector(selectTextColor);

	return (
		<div className="flex items-center">
			<a
				href="https://www.linkedin.com/in/henrik-cheng-a8a3b9180/"
				className="mr-3"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					icon={faLinkedin}
					className={`${textColor} fa-xl lg:fa-2x hover:drop-shadow-lg`}
				/>
			</a>
			<a href="mailto:henrikcheng@live.se" className="mr-3">
				<FontAwesomeIcon
					icon={faEnvelope}
					className={`${textColor} fa-xl lg:fa-2x hover:drop-shadow-lg`}
				/>
			</a>
			<a href="tel:+46725133704">
				<FontAwesomeIcon
					icon={faPhone}
					className={`${textColor} fa-xl lg:fa-2x hover:drop-shadow-lg`}
				/>
			</a>
			{displayName && (
				<span
					className={`text-2xl xl:text-3xl font-semibold hidden lg:block ${textColor}`}
				>
					Henrik Cheng
				</span>
			)}
		</div>
	);
};

export default SocialMediaSection;
