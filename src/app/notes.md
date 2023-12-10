import { useMutation } from '@apollo/client';
import { YOUR_MUTATION } from 'path-to-generated-mutation';

const MyFormComponent = () => {
  const [submitForm, { loading, error }] = useMutation(YOUR_MUTATION);

  const handleSubmit = async (formData) => {
    try {
      const { data } = await submitForm({
        variables: {
          input: formData,
        },
      });

      // Handle successful submission
      console.log('Form submitted successfully:', data);
    } catch (error) {
      // Handle submission error
      console.error('Form submission error:', error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = {
          name: e.target.name.value,
          email: e.target.email.value,
          contactNumber: e.target.contactNumber.value,
          address: e.target.address.value,
        };
        handleSubmit(formData);
      }}
    >
      {/* Your form fields go here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;
