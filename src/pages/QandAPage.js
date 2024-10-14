import React from 'react';

const QandAPage = () => {
  return (
    <div>
      <h1 className="text-primary">Q&A</h1>
      <ul>
        <li>
          <strong>What is cloud storage?</strong>
          <p>Cloud storage is a service that allows you to store data on remote servers accessed via the internet, rather than on your local computer.</p>
        </li>
        <li>
          <strong>How secure is my data?</strong>
          <p>Data stored in the cloud is secured through encryption, access controls, and regular security audits to ensure your information is safe.</p>
        </li>
        <li>
          <strong>What are the pricing plans?</strong>
          <p>We offer various pricing plans based on storage capacity and additional features. Visit our pricing page for more details.</p>
        </li>
        <li>
          <strong>Can I access my data from anywhere?</strong>
          <p>Yes! As long as you have an internet connection, you can access your data from any device, anywhere in the world.</p>
        </li>
        <li>
          <strong>What happens if I lose internet connectivity?</strong>
          <p>You can still access your previously downloaded files, and any changes will sync automatically once you're back online.</p>
        </li>
      </ul>
    </div>
  );
};

export default QandAPage;
