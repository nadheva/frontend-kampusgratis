import React from "react";

import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

const CardBody = () => {
	return (
		<div className="card-body p-0 pt-3">
			<div className="vstack gap-3">
				<div className="row mb-4">
					<div className="col-12">
						<CreateComment />
						<CommentList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardBody;
