import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
    it('should submit the form when all fields are filled', async () => {
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'This is a test message ' } });

        fireEvent.click(screen.getByText(/send/i));

        //Wait for the form submission to complete
        await waitFor(() => hasUncaughtExceptionCaptureCallback(screen.getByText(/message sent!/i)).toBeInTheDocument());
    });

    it('should show an error message if a required field is missing', async () => {
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });

        fireEvent.click(screen.getByText(/send/i));

        //Wait for the error message to appear
        await waitFor(() => expect(screen.getByText(/all fields are required/i)).toBeInTheDocument());
    });
});