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
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          {/* <p>{person.name}</p> */}
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
