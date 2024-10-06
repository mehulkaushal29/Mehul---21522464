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
      <form onSubmit={handleAddContact}>
      {/* Replacing the input field with a dropdown */}
      <label>Phone Type:</label>
      <select value={contactType} onChange={(e) => setContactType(e.target.value)}>
        <option value="">Select Phone Type</option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Mobile">Mobile</option>
        <option value="Other">Other</option>
      </select>


            <button className='button green' type='submit'>Create Contact</button>
        </form>
	);
}

export default NewContact;
