import React from 'react';
import Contacts from './Contacts';
import Mapcontainer from './Mapcontainer';

class Contactspage extends React.Component {
    render() {
        return (
            <>
                <Contacts />
                <Mapcontainer />
            </>
        );
    }
}

export default Contactspage;