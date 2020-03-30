import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'components/button';
import { selectCount, decrement, increment, incrementAsync } from 'modules/counter';
import useAction from 'hooks/useAction';

const About: React.FC = () => {
  const count = useSelector(selectCount);

  const onMinusPress = useAction(decrement);
  const onPlusPress = useAction(increment);
  const onPlusAsyncPress = useAction(incrementAsync, 2);

  return (
    <div>
      <h1>About</h1>

      <main>
        <Button onClick={onMinusPress}>-</Button>
        <span>{count}</span>
        <Button onClick={onPlusPress}>+</Button>

        <br />

        <Button onClick={onPlusAsyncPress}>+ async</Button>
      </main>
    </div>
  );
};

export default About;
