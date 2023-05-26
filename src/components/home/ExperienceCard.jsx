import React from "react";

import { Col } from "react-bootstrap";

const ExperienceList = ({ list }) => {
	<ul>
		{list?.forEach((element) => {
			return <li>{element}</li>;
		})}
	</ul>;
};

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6">
			<div className="pb-5 text-center">
				{/* <img className=" bg-white mb-3" src={data.companylogo} alt="" /> */}
				<i className={`fa-solid ${data.icon} fa-2x `} />
				<p className="lead">{data.name}</p>
				<p>
					{data.date}
					<br />
					{data.location}
				</p>
				{data?.list?.length > 0 && ExperienceList(data?.list)}
			</div>
		</Col>
	);
};

export default ExperienceCard;
