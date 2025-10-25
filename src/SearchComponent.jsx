import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const items = ['samsung', 'iphone', 'vivo', 'oppo', 'redmi'];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;
