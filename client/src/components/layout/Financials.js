import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

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

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
            <Links>
              <div className='header'>
                <p>MASAKALI</p>
                <h1>INVESTORS</h1>
                <div className='divider' />
              </div>
              <p style={{ textAlign: 'center', padding: '5px' }}>
                Click below to download documents.
              </p>
              <a
                href='https://ik.imagekit.io/4kpopox69zp/Files/Land_Acquisition_Disclosure_Statement_iATNJ_w924f.pdf'
                target='_blank'
                className='investor-link'
              >
                Land Acquisition Disclosure Statement.pdf
              </a>
              <a
                href='https://docs.google.com/spreadsheets/d/1d_nDERIyOM4SP8U7-SGR7gFrWR1LFIt4kuhLzL3QzXA/edit?usp=sharing'
                target='_blank'
                className='investor-link'
              >
                Akasha Financial Spreadsheet Google Sheets
              </a>
            </Links>
          ) : (
            <CodeForm onSubmit={handleSubmit}>
              <div className='header'>
                <p>MASAKALI</p>
                <h1>INVESTORS</h1>
                <div className='divider' />
              </div>
              <Text>
                Looking to invest in Masakali? We have prepared a pitch deck and
                the relevant financials, which are available to approved
                parties.
              </Text>
              <Text>
                If you have the required code, please enter it below to view
                additional documents. Otherwise, please contact us to receive
                your code.
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
