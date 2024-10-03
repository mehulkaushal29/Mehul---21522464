import { useState } from 'react';

function NewContact(props) {
    const {contacts, setContacts} = props;
    const [name, setName] = useState('');

    async function createContact(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });

        const data = await response.json();

        if (data.id) {
            setContacts([...contacts, data]);
        }

        setName('');
    }
	const [category, setCategory] = useState('Customer'); // The default value is "Customer"


	return (
        <form className='new-contact' onSubmit={createContact}>
           <select value={category} onChange={(e) => setCategory(e.target.value)}>
	<option value="Customer">Customer</option>
	<option value="Employee">Employee</option>
	<option value="Supplier">Supplier</option>
	<option value="Other">Other</option>
	</select>

            <button className='button green' type='submit'>Create Contact</button>
        </form>
	);
}

export default NewContact;
