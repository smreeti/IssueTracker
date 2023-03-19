import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import IssueReport from './IssueReport.jsx';
import NotFound from './NotFound.jsx';

export default function Contents() {
    return (
        <Routes>
            <Route exact from="/" to="/issues" />
            <Route path="/issues" element={<IssueList />} />
            <Route path="/issues/:id" element={<IssueList />} />
            <Route path="/report" element={<IssueReport />} />
            <Route path="/edit/:id" element={<IssueEdit />} />
            <Route element={<NotFound />} />
        </Routes>
    );
}