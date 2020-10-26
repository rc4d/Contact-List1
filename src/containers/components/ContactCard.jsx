import React from 'react';
import '../Contacts.css';
const ContactCard = ({contact}) => {
	
	return(

	  	<div>
	        
	        <div className="col-xs-8 col-sm-9">
	            <span className="name">{contact.name + ' ' + contact.surname}</span><br/>
	            
	            <span className="fa fa-phone c-info" title={contact.phone}></span>
	            <span className="visible-xs"> <span>{contact.phone}</span><br/></span>
	            
	            <span className="fa fa-envelope text-muted c-info"title={contact.email}></span>
	            <span className="visible-xs"> <span className="text-muted">{contact.email}</span><br/></span>

				 <span className="fa fa-map-marker text-muted c-info" title={contact.address}></span>
	            <span className="visible-xs"> <span className="text-muted">{contact.address}</span><br/></span>

	        </div>
	        <div className="clearfix"></div>
	      </div>
        
    )
}

export default ContactCard;