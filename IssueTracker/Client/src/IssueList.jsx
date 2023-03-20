import React from "react";
import IssueFilter from "./issueFilter.jsx";
import IssueTable from "./issueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";
import graphQLFetch from './graphQLFetch.js';

export default class IssueList extends React.Component {

    constructor() {
        super();
        this.state = { issues: [] };
        this.createIssue = this.createIssue.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const query = `query {
			issueList {
				id title owner status
			}
		}`

        const data = await graphQLFetch(query);

        if (data) {
            this.setState({ issues: data.issueList });
        }
    }

    async createIssue(issue) {
        const query = `mutation issueAdd($issue: IssueInputs!) {
				issueAdd(issue: $issue) {
				   title owner status
				}
			  }`;

        try {

            const data = await graphQLFetch(query, { issue });

            if (data) {
                this.loadData();
            }
        } catch (e) {
            alert(`Error in sending data to server: ${e.message}`);
        }
    }

    render() {
        return (
            <>
                <IssueFilter />
                <IssueTable issues={this.state.issues} />
                <IssueAdd createIssue={this.createIssue} />
            </>
        );
    }
}