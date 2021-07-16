import React from 'react';
import ModeButton from './ModeButton';

export default function Modes() {
  return (
    <>
      <ModeButton
        mode="numberRange"
        modeName="Mode"
        modeYes="Number Range"
        modeNo="Custom Items"
      />
      <ModeButton
        mode="repeat"
        modeName="Repeat Mode"
        modeYes="Repeat"
        modeNo="No Repeat"
      />
      <ModeButton
        mode="hidden"
        modeName="Item List"
        modeYes="Hidden"
        modeNo="Visible"
      />
      <ModeButton mode="sound" modeName="Sound" modeYes="On" modeNo="Off" />
    </>
  );
}
