import React from "react";
import { Link } from 'react-router-dom';

export default class IssueRow extends React.Component {
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
                <td><Link to={`/edit/${issue.id}`}>Edit</Link></td>
            </tr>
        );
    }
}