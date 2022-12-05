import { BioDetails } from "../BioDetails/BioDetails";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi"
import "./BioItem.css";

export const BioItem = ({ bio, active, onToggle }) => {
	return (
		<div className="bio-item">
			<div className="bio-title" onClick={onToggle}>
				<span className="white-text">{bio.year}: </span>
				<span className="gray-text">
					{bio.title}
					{active ? <HiOutlineChevronUp className="chevron" /> : <HiOutlineChevronDown className="chevron" />}
				</span>
			</div>
			<div style={active ? { height: document.clientHeight, paddingTop: "0.5rem" } : { height: "0px" }}>
				<div className="bio-details">
					{<BioDetails bio={bio} active={active} />}
				</div>
			</div>
			<div className="line"></div>
		</div>
	);
};
