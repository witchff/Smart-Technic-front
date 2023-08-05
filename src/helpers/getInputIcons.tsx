import React from 'react';

export const getStatusIcon = (status: string) => {
  if (status === 'default') return;
  if (status === 'error')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_1_6923)">
          <circle
            cx="11.9998"
            cy="11.9998"
            r="9.00375"
            stroke="#F15152"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0017 9.99902L10 14.0007"
            stroke="#F15152"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0017 14.0007L10 9.99902"
            stroke="#F15152"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_6923">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  if (status === 'success')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_1_6933)">
          <circle
            cx="11.9998"
            cy="11.9998"
            r="9.00375"
            stroke="#22A44E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.44531 12.3387L10.6132 14.5066L10.5992 14.4926L15.4902 9.60156"
            stroke="#22A44E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_6933">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
};

export const getIcon = (icon: string) => {
  if (icon === 'default') return;
  if (icon === 'password')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
          stroke="#070C11"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="#070C11"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (icon === 'dropdown')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
      >
        <path
          d="M5.79171 5.68907C5.6337 5.85749 5.3663 5.85749 5.20829 5.68907L0.502881 0.673683C0.263238 0.418253 0.444349 -1.01023e-06 0.794595 -9.79608e-07L10.2054 -1.56889e-07C10.5557 -1.26269e-07 10.7368 0.418255 10.4971 0.673684L5.79171 5.68907Z"
          fill="#070C11"
        />
      </svg>
    );
};
