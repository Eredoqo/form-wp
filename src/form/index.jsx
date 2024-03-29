import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import emailjs from "@emailjs/browser";
import Step1 from "./step-3";
import Step2 from "./step-2";
import Step3 from "./step-1";
import Step4 from "./step-4";
import Step5 from "./step-5";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
const stepComponents = [Step3, Step2, Step1, Step4, Step5];

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const formRef = useRef();

  const onSubmit = () => {
    if (activeStep === steps.length - 1) {
      emailjs
        .sendForm(
          "service_rijoxoc",
          "template_qrqsx7o",
          formRef.current,
          "uh2R_kbxSvUJcSKXh"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {React.createElement(stepComponents[activeStep], { register })}
      <Button type="submit">
        {activeStep === steps.length - 1 ? "Submit" : "Next"}
      </Button>
    </form>
  );
};

export default Form;
