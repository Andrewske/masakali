import emailjs from 'emailjs-com';

export const validation = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.name) {
    errors.name = 'Name is Required';
  }
  return errors;
};

export const submitForm = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    const { name, email, message } = values;
    const templateParams = {
      name,
      email,
      message,
    };
    emailjs
      .send(
        'service_2lf9b77',
        'template_dvw0rhp',
        templateParams,
        'user_TvSKZZDdDmn7DlbKcqRCB'
      )
      .then(
        (response) => {
          alert('Thank you for contacting us. You will hear from us soon.');
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
    resetForm();
    setSubmitting(false);
  }, 400);
};
