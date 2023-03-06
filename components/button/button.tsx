import { FC, ButtonHTMLAttributes } from 'react';
import './button.less';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button: FC<ButtonProps> = props => {
    return <button {...props}>Button</button>;
};
