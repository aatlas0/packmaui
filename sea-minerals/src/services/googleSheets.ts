export const submitOrderToSheet = async (formData: any) => {
    // Replace with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log('Form submission response (no-cors ignores content):', response);
        return true;
    } catch (error) {
        console.error('Error submitting form:', error);
        return false;
    }
};
