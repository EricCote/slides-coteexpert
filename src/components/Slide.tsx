import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
}

export default function Slide({ children }: SlideProps) {
  return <section>{children}</section>;
}
