import { useState } from 'react';

export interface IUseToggle {
  /**
   *  active
   *  @type boolean
   *  @description the value of the current active state
   */
  active: boolean;

  /**
   *  show()
   *  @type method
   *  @description sets active state to true (transition in)
   */
  show(): void;

  /**
   *  hide()
   *  @type method
   *  @description sets active state to false (transition out)
   */
  hide(): void;

  /**
   *  toggle()
   *  @type method
   *  @description switches between active state
   */
  toggle(): void;
}

export const useToggle = (): IUseToggle => {
  /**
   *  State
   */
  const [active, setActive] = useState(false);

  /**
   *  show()
   */
  const show = () => setActive(true);

  /**
   *  hide()
   */
  const hide = () => setActive(false);

  /**
   *  toggle()
   */
  const toggle = () => {
    !active ? show() : hide();
  };

  /**
   *  Return API
   */
  return {
    active,
    show,
    hide,
    toggle
  };
};
