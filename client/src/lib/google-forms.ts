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