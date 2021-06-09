import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  padding: 25px;
  text-align: justify;
`;

const Text = styled.p`
  padding: 10px;
`;

const Financials = () => {
  const [showContact, setShowContact] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const code = 'masakali2020';

  const handleClick = () => {
    setShowContact(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.code.value === code) {
      setIsAuthenticated(true);
    }
  };
  return (
    <Container>
      {showContact ? (
        <ContactForm />
      ) : (
        <Fragment>
          {isAuthenticated ? (
            <div>Yes</div>
          ) : (
            <CodeForm onSubmit={handleSubmit}>
              <div className='header'>
                <p>MASAKALI</p>
                <h1>FINANCIALS</h1>
                <div className='divider' />
              </div>
              <Text>
                Looking to invest in Masakali? We have prepared the relevant
                financials, which are available to approved parites.
              </Text>
              <Text>
                If you have the required code please enter it below to view our
                financial documents. Otherwise please contact us to receive your
                code.
              </Text>
              <input
                className='contact-input'
                id='code'
                placeholder='Enter Code'
              />
              <button className='contact-submit'>Submit</button>
              <a
                style={{ textAlign: 'center', padding: '5px' }}
                onClick={handleClick}
              >
                Request a Code
              </a>
            </CodeForm>
          )}{' '}
        </Fragment>
      )}
    </Container>
  );
};

export default Financials;
