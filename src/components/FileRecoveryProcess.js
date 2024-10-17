import React from 'react';
import { Accordion } from 'react-bootstrap';

const FileRecoveryProcess = () => {
    return (
        <div className="my-4">
            <h2>Customer Support Process for Deleted Files:</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Step 1: Gather Information
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Support Agent: "I’m sorry to hear that! Let us see if we can recover those files. Can you tell me:</p>
                        <p>When did you delete the files? What types of files were they (e.g., documents, images)? Do you remember if they were in a specific folder?"</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Step 2: Check the Trash/Recycle Bin
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Support Agent: "Many cloud services have a Trash or Recycle Bin where deleted files are temporarily stored."</p>
                        <p>Action: "Please go to your cloud storage dashboard and look for a Trash or Deleted Items folder."</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Step 3: Review File Recovery Options
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Action: If the files are in the Trash:</p>
                        <p>Guide the customer through the recovery process: "You should see your deleted files there. You can select them and click 'Restore.'"</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Step 4: Check for Backups
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Support Agent: "If the files aren’t in the Trash, let’s see if you have backups enabled."</p>
                        <p>Action: "Do you have any backup services set up? If so, we may be able to restore from there."</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        Step 5: Confirm Data Retention Policies
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Action: Review the cloud provider’s data retention policies.</p>
                        <p>Support Agent: "Some cloud services retain deleted files for a certain period. Let me check if this applies to your account."</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        Step 6: Utilize Recovery Tools
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Support Agent: "If we can’t find the files in the Trash or through backups, we may need to use recovery tools provided by the service."</p>
                        <p>Action: "Instruct the customer on how to access any recovery features (if available)."</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        Step 7: Escalate If Necessary
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Customer: "I still can’t find my files!"</p>
                        <p>Support Agent: "I understand how important this is. I will escalate this to our technical team for a deeper investigation."</p>
                        <p>Action: "Document all relevant information and create a support ticket."</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        Step 8: Follow Up
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Support Agent: "We’ll work on this and get back to you as soon as possible. Do you have a preferred contact method for updates?"</p>
                        <p>Action: "Set a timeline for updates and assure the customer you are on it."</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        Final Steps
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Once the technical team reviews the situation, provide the customer with an update.</p>
                        <p>If the files are recoverable, guide the customer through the restoration process.</p>
                        <p>Follow up to ensure the customer is satisfied with the outcome.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FileRecoveryProcess;
