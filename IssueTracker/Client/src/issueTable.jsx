import React from "react";
import IssueRow from "./IssueRow.jsx";

export default class IssueTable extends React.Component {
    render() {

        const allRows = this.props.issues.map(
            issue => <IssueRow issue={issue} key={issue.id} />)

        return (

            <table className="bordered-table">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Owner</th>
                        <th> Title</th>
                        {/* <th> Created</th> */}
                        <th> Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allRows}
                </tbody>

            </table>

        );
    }
}