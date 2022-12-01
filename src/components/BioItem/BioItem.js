import { BioDetails } from "../BioDetails/BioDetails";
import { HiOutlineChevronDown, HiOutlineChevronUp} from "react-icons/hi"
import "./BioItem.css";

export const BioItem = ({ bio, active, onToggle}) => {
	return (
		<div className={`lines-item ${active ? "active" : ""}`}>
			<div className="text-bio" onClick={onToggle}>
				<span className="white-text">{bio.year}:</span>
				<span className="gray-text" data-tip="title">
						{bio.title}   
						{active ? <HiOutlineChevronUp className="chevron"/> : <HiOutlineChevronDown className="chevron"/>}
				</span>
			</div>
			<div
				style={
					active ? { height: document.clientHeight, paddingTop: "0.5rem" }:{ height: "0px" }
				}
			>
			<div className="details">
				{<BioDetails bio={bio} active={active}/>}
				</div>
			</div>
			<div className="line"></div>
		</div>
	);
};
