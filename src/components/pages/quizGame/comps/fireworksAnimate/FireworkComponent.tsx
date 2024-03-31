import React, { FC, ReactElement, CSSProperties } from 'react';
import { Fireworks, useFireworks } from 'fireworks-js/dist/react';

interface FireworkAnimate {
  children?: React.ReactNode;
}

const FireworkComponent: FC<FireworkAnimate> = ({ children }): ReactElement => {
  const { options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      rocketsPoint: 100,
      speed: 10,
      acceleration: 1.2,
      friction: 0.99,
      gravity: 2,
      particles: 1000,
      trace: 6,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
      mouse: {
        click: false,
        move: false,
        max: 1,
      },
    },
  });

  const style: CSSProperties = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: 'none',
    zIndex: -2,
  };

  return (
    <>
      <div>
        <Fireworks style={style} options={options}></Fireworks>
        {children}
      </div>
    </>
  );
};

export default FireworkComponent;
