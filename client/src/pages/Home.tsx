import React, {useState} from 'react';
import { PageHeading } from '../components/PageHeading';
import { Login } from '../components/Login';
import { formId } from '../data/question-form';

export const Home = () => {

  const [token, setToken] = useState<string>("");

  const getFormResponses = () => {
    fetch(`https://forms.googleapis.com/v1/forms/${formId}/responses`, {
      method: "GET",
      headers: new Headers({ 'Authorization': 'Bearer ' + token})
    }).then((res) => {
      console.log('token: ' + token);
      console.log(res);
    })
  }

  return <>
    <PageHeading title='Home'/>
    <Login setToken={setToken}/>
    <button onClick={() => getFormResponses()}>
      Get form responses
    </button>
  </>
}
