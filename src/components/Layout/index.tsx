import { NavigationBar } from '../NavigationBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};
