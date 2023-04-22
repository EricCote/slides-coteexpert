import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
}

let count: number = 0;

export default function Slide({ children, ...props }: SlideProps) {
  count = count + 1;
  return (
    <section id={count.toString()} {...props}>
      {children}
    </section>
  );
}
