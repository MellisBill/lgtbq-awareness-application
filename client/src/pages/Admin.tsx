import React, { useState } from "react";
import { EmbeddedForm } from "../components/EmbeddedForm";
import { ErrorBanner } from "../components/ErrorBanner";
import { PageHeading } from "../components/PageHeading";
import { Question } from "../components/Question";
import { formConfig } from "../config/google-forms";
import { useCustomGoogleLogin } from "../hooks/useCustomGoogleLogin";
import { useFormResponses } from "../hooks/useFormResponses";
import { FormAPIResponseItem } from "../types/types";
import { AdminLogin } from "./AdminLogin";

export const Admin = () => {
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [token, setToken] = useState("");
  const login = useCustomGoogleLogin(setToken);
  const [responseItems, error, loading] = useFormResponses(
    formConfig.questionForm.id,
    token
  );
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <>
      <PageHeading title="Admin" />

      {!authenticated ? (
        <AdminLogin setAuthenticated={setAuthenticated}/>
      ) : (
        <div>
          <ErrorBanner error={error} />
          <div className="form-button-strip">
            {error.errorMessage && (
              <button onClick={() => login()}>Login</button>
            )}
            {formVisible ? (
              <button onClick={() => setFormVisible(false)}>
                Minimise form
              </button>
            ) : (
              <button onClick={() => setFormVisible(true)}>
                Answer a question
              </button>
            )}
          </div>
          {formVisible && (
            <EmbeddedForm
              title="Question form"
              url={formConfig.responseForm.embedUrl}
            />
          )}
          <div className="answers-list">
            <h2>Questions</h2>
            {responseItems.map(
              (responseItem: FormAPIResponseItem, i: number) => {
                return <Question key={i} responseItem={responseItem} />;
              }
            )}
            {loading && <p>Loading...</p>}
            {(!loading && responseItems.length) === 0 && (
              <p>No items to display</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
