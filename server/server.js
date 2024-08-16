import express, { json } from 'express';
import { v4 as uuidv4 } from 'uuid';

const server = express();
server.use(json());

class Issue {
    constructor(title, description) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
    }
}

let issues = [
    new Issue('Issue 1', 'This is Issue 1'),
    new Issue('Issue 2', 'This is Issue 2')
];

// Add
server.post('/issues', (req, res) => {
    const { title, description } = req.body;
    const newIssue = new Issue(title, description);
    issues.push(newIssue);
    console.log('Created:', newIssue);
    res.status(201).json(newIssue);
});

// Read
server.get('/issues/:id', (req, res) => {
    const issue = issues.find(i => i.id === req.params.id);
    if (issue) {
        res.json(issue);
    } else {
        res.status(404).json({ message: 'Issue not found' });
    }
});

server.get('/all-issues', (req, res) => {
    if (issues.length !== 0) {
        res.json(issues);
    } else {
        res.status(404).json({ message: 'Dream application! No Issues are raised yet :)' });
    }
});

// Update
server.put('/issues/:id', (req, res) => {
    const { title, description } = req.body;
    const issue = issues.find(i => i.id === req.params.id);
    if (issue) {
        issue.title = title;
        issue.description = description;
        console.log('Updated:', issue);
        res.json(issue);
    } else {
        res.status(404).json({ message: 'Issue not found' });
    }
});

// Delete
server.delete('/issues/:id', (req, res) => {
    const issueIndex = issues.findIndex(i => i.id === req.params.id);
    if (issueIndex !== -1) {
        const deletedIssue = issues.splice(issueIndex, 1);
        console.log('Deleted:', deletedIssue);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Issue not found' });
    }
});

server.listen(8080, () => console.log('Server running on port 8080'));