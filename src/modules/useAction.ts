import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator } from 'redux';

const useAction = <T extends ActionCreator<unknown>, U>(action: T, ...args: any[]) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(action(...args));
  }, [action, args, dispatch]);
};

export default useAction;
