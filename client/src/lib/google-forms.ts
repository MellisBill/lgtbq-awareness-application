export const getFormResponses = (formId: string) => {
    fetch(`https://forms.googleapis.com/v1/forms/${formId}/responses`, {
      method: "GET",
      headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('oauth-token')})
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
    })
  }