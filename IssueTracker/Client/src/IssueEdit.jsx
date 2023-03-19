
import React from 'react';
import { useParams } from 'react-router-dom';

function IssueEdit(props) {
    const { id } = props.params;
    return (
        <h2>{`This is a placeholder for editing issue ${id}`}</h2>
    );
}

function getParam(Component) {
    return props => <Component {...props} params={useParams()} />
}

export default getParam(IssueEdit);