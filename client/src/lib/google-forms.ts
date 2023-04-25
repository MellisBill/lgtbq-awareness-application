// Function to make API request to Google forms API response list endpoint
// param formId: ID of form
// returns {error, body} - see handleResponse()
export const getFormResponses = async (formId: string) => {
    return await handleResponse(
      await fetch(
        `https://forms.googleapis.com/v1/forms/${formId}/responses`, {
        method: "GET",
        headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('oauth-token')})
      },
    )
  );
}

// Utility function to format response from API call in the form {error, body}
// param res: API response
// returns {error, body}
//    error: HTTP error code (if applicable)
//    body: response body from API call
const handleResponse = async (res: any) => {
  if (res.status < 200 || res.status >= 300) {
    return {
      error: res.status,
      body: await res.json()
    };
  }
  return {
    body: await res.json()
  };
}