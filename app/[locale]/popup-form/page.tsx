'use client'

import { Popover, PopupButton } from '@typeform/embed-react'

const handleOnReady = () => {
  // eslint-disable-next-line no-console
  console.log('form in popover ready')
}

export default function Page() {

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: 10,
    border: 'none',
    background: 'navy',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer',
  }

  return (
    <main>
      {/* <p>
        <PopupButton
          id={"dHWxc3pF"}
          style={buttonStyle}
          size={66}
          medium="demo-test"
          hidden={{ foo: 'foo value', bar: 'bar value' }}
        >
          <span role="img" aria-label="check">
            ️✅
          </span>
          <span style={{ marginLeft: 10 }}>open popup</span>
        </PopupButton>
      </p> */}

      <Popover
        id={"dHWxc3pF"}
        onReady={handleOnReady}
        medium="demo-test"
        hidden={{ foo: 'foo value', bar: 'bar value' }}
        buttonProps={{ ariaLabel: 'Typeform Button', dataTestid: 'demo-button' }}
        tooltip="welcome"
      />
    </main>
  )
}