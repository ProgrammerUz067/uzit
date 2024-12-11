import React from 'react';

export default function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionsOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setAccordionsOpen(!accordionOpen)}
        className="flex justify-between transition duration-200 ease-out mt-[25px]">
        {/* {accordionsOpen ? (
          <span className="text-[36px]">+</span>
        ) : (
          <span className="text-[36px]">-</span>
        )} */}
        <svg
          className="fill-white shrink-0 mt-[20px]"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
        </svg>
        <div className="border-b border-white-400 transition duration-200 ease-out">
          <h3 className="text-[30px] font-bold ml-[5px] transition duration-200 ease-out text-left">
            {title}
          </h3>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[18px] text-start font-bold ${
              accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}>
            <div className="overflow-hidden whitespace-pre-line pb-[10px]">{answer}</div>
          </div>
          {/* <p className={`transition duration-200 ease-out block ${accordionOpen ? 'hidden' : ''}`}>
            dsaasd
          </p> */}
        </div>

        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
      </button>
    </>
  );
}
