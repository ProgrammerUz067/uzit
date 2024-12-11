import React from 'react';
import './Sphere.scss';
import main from '../../../public/main.png';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Sphere() {

  return (
    <div className="flex items-center w-full h-fit overflow-hidden">
      <div className="img">
        <img src={main} alt="png" />
      </div>
    </div>
  );
}
