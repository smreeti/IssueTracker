import React from "react";

class IssueRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.owner}</td>
                <td>{issue.title}</td>
                {/* <td>{issue.created.toDateString()}</td> */}
                <td>{issue.status}</td>
                <td><a href={`/#/edit/${issue.id}`}>Edit</a></td>
            </tr>
        );
    }
}

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