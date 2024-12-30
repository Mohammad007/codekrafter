import React from 'react';
import './membership.css'

function MembershipPlan() {
  return (
    <>
  <h1 className="membership-h">Technology Combination</h1>




<div className="membership-plan">
  <div className="membership-option basic">
    <h2 className="price">FrontEnd</h2>
    <p>Get access to our basic features.</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>PHP</li>
    </ul>
    <p className="price">BsckEnd</p>
    <button>Sign Up</button>
  </div>

  {/*  */}

  <div className="membership-option premium ">
    <h2>Premium</h2>
    <p>Get access to all of our features.</p>
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Next</li>
    </ul>
    <p className="price">$19.99/month</p>
    <button>Sign Up</button>

  </div>
    {/*  */}

    <div className="membership-option golden">
    <h2>Golden</h2>
    <p>Get access to our basic features.</p>
    <ul>
      <li>Angular</li>
     
    </ul>
    <p className="price">$29.99/month</p>
    <button>Sign Up</button>


  </div>
</div>
</>
  );
}

export default MembershipPlan;
