import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPlans = () => {

  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 pricing-header">Pricing:</h2>
      <div className="row">
        {/* Monthly Plan */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Monthly Plan</h5>
              <p className="card-text">$25/month</p>
              <ul className="list-unstyled">
                <li>Access to all features</li>
                <li>24/7 Customer Support</li>
                <li>Regular Updates</li>
              </ul>
              <a href="#" className="btn btn-primary" onClick={()=> navigate('/signup')}>Sign Up</a>
            </div>
          </div>
        </div>

        {/* Yearly Plan */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Yearly Plan</h5>
              <p className="card-text">$100/year</p>
              <ul className="list-unstyled">
                <li>Access to all features</li>
                <li>24/7 Customer Support</li>
                <li>Regular Updates</li>
                <li>2 Months Free</li>
              </ul>
              <a href="#" className="btn btn-primary" onClick={()=> navigate('/signup')}>Sign Up</a>
            </div>
          </div>
        </div>

        {/* Corporate Plan */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Corporate Plan</h5>
              <p className="card-text">Custom Pricing</p>
              <ul className="list-unstyled">
                <li>Access to all features</li>
                <li>Dedicated Account Manager</li>
                <li>Custom Solutions and Integrations</li>
                <li>Priority Support</li>
              </ul>
              {/* Here we can see JSX code is in full effect. With the JavaScript onClick Event={} */}
              <a href="#" className="btn btn-primary" onClick={()=> navigate('/contact')}>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
