import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormStep } from './FormStep';
import { Step1Content } from './Step1Content';
import { Step2Content } from './Step2Content';
import { Step3Content } from './Step3Content';

const stepsConfig = [
  { 
    title: '第一步：个人信息', 
    fields: ['username', 'email'], 
    content: Step1Content 
  },
  { 
    title: '第二步：职业信息', 
    fields: ['phone', 'company', 'position'], 
    content: Step2Content 
  },
  { 
    title: '第三步：其他信息', 
    fields: ['hobbies', 'introduction', 'agreement'], 
    content: Step3Content 
  }
];

export const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  
  const { register, handleSubmit, trigger, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const totalSteps = stepsConfig.length;
  const isAllStepsCompleted = completedSteps.size === totalSteps;

  const handleNext = useCallback(async () => {
    const fields = stepsConfig[activeStep].fields;
    const isValid = await trigger(fields);

    if (isValid) {
      setCompletedSteps(prev => new Set(prev).add(activeStep));
      if (activeStep < totalSteps - 1) {
        setActiveStep(prev => prev + 1);
      }
    }
  }, [activeStep, trigger, totalSteps]);

  const handleBack = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
  };

  const handleHeaderClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    alert("表单已提交！\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>多步骤表单向导</h1>
      <h2>进度：步骤 {activeStep + 1} / {totalSteps}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {stepsConfig.map((step, index) => {
          const StepContentComponent = step.content;
          return (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <FormStep
                title={step.title}
                stepNumber={index}
                isActive={activeStep === index}
                isCompleted={completedSteps.has(index)}
                onHeaderClick={handleHeaderClick}
              >
                <StepContentComponent register={register} errors={errors} />
              </FormStep>
            </div>
          );
        })}

        <div 
          className="navigation-buttons"
          style={{ 
            marginTop: '2rem',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-between'
          }}
        >
          <div>
            {activeStep > 0 && (
              <button 
                type="button" 
                onClick={handleBack}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                上一步
              </button>
            )}
          </div>
          
          <div>
            {activeStep < totalSteps - 1 && (
              <button 
                type="button" 
                onClick={handleNext}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                下一步
              </button>
            )}
            
            {isAllStepsCompleted && (
              <button 
                type="submit"
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft: activeStep < totalSteps - 1 ? '1rem' : '0'
                }}
              >
                提交
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};