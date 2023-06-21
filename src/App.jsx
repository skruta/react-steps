import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [person, setPerson] = useState({ name: 'Steven' });

  const handleNext = () => {
    if (step >= 3) return;
    setStep((s) => s + 1);

    // Mutating primitive values won't trigger UI re-render, nevet do it!!! USE HOOKS!!!
    // step = step + 1;

    // Mutating object's properties work, but never do it!!! USE HOOKS!!!
    // person.name = 'Jacob';
  };

  const handlePrevious = () => {
    if (step <= 1) return;
    setStep((s) => s - 1);
  };

  const handleButton = () => {
    setIsOpen((s) => !s);
  };

  return (
    <>
      <button onClick={handleButton} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, i) => (
              <div className={step >= i + 1 ? 'active' : ''} key={i}>
                {i + 1}
              </div>
            ))}
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          {/* <p>{person.name}</p> */}
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>⬅️</span> Previous
            </Button>

            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3> {children}
    </div>
  );
}
