
import React from 'react';

const AddContactForm = ({onInputChange, onFormSubmit}) => 
	(
		<form>
			
			
			<div className="form-group class-sm-3">
			    <input type="name" class="form-control" name="name" onChange={onInputChange} placeholder="First Name" />
			</div>
			
			<div className="form-group class-sm-3">
			    <input type="name" class="form-control" name="surname" onChange={onInputChange} placeholder="Last Name" />
			</div>
			
			<div className="form-group">
			    <label htmlFor="phoneNumber">Phone Number</label>
			    <input type="number" class="form-control" name="phone" onChange={onInputChange} placeholder="+91 1234567890" />
			 </div> 

			<div className="form-group">
			    <label htmlFor="emailAddress">Email address</label>
			    <input type="email" class="form-control" name="email" onChange={onInputChange} placeholder="name@example.com" />
			</div>

			<div className="form-group">
			    <label htmlFor="physicalAddress">Address</label>
			    <textarea className="form-control" name="address" onChange={onInputChange} rows="3"></textarea>
			</div>

			<button type="submit" onClick={onFormSubmit} class="btn btn-primary"> Submit </button>
		</form>
	)

export default AddContactForm;