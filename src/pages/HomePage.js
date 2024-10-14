import React from 'react';
import PricingPlans from '../components/PricingPlan';
import '../styles/HomePage.css'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-primary">Welcome to Our Cloud Service</h1>
      <p className="lead">Your data, securely stored and easily accessible.</p>

      <PricingPlans />
    </div>
  );
};

export default HomePage;
