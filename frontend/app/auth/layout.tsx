import React from 'react';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-col h-screen justify-center items-center'>
      <nav></nav>
      <div className="flex justify-center items-center flex-1">
        {children}
      </div>
    </section>
  );
}
