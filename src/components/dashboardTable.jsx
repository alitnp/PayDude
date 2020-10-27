import React from "react";

const table = (tableData, tableName) => {
	return (
		<div className="card table-card">
			<small>{tableName}</small>
			<div>
				<table>
					<tr>
						{Object.entries(tableData[0]).map(([key]) => {
							return <th>{key}</th>;
						})}
					</tr>
					{tableData.map((data) => {
						return (
							<tr>
								{Object.entries(data).map(([key, value]) => {
									return <td key={key}>{value}</td>;
								})}
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
};
export default table;
