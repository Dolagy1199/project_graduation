import * as React from 'react';
import Slider from '../Components/Slider'
import Buttons from '../Components/Buttons';
import LastEvent from '../Components/LastEvent';


export default function Home() {
  return (
    <div>
      <Slider />
      <Buttons />
      <LastEvent />
    </div>
  );
}
