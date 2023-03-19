import React from "react";

export default class IssueAdd extends React.Component {

	constructor() {
		super();
		this.addIssue = this.addIssue.bind(this);
	}

	addIssue(e) {
		e.preventDefault();
		const form = document.forms.issueAdd;
		const issue = {
			owner: form.owner.value, title: form.title.value, status: 'New'
		}
		this.props.createIssue(issue);
		form.owner.value = "";
		form.title.value = "";
	}

	render() {
		return (
			<form name="issueAdd" onSubmit={this.addIssue}>
				<input type='text' name="owner" placeholder="owner" />
				<input type='text' name="title" placeholder="title" />
				<input type='text' name="status" placeholder="status" />
				<button>Add</button>
			</form>

		);
	}
}
