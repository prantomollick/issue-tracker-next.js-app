'use client';
import dynamic from 'next/dynamic';
import React from 'react';
const SimpleMDENext = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

interface SimpleMDEProps {
  placeholder: string;
  fields: object;
}

const SimpleMDE = ({ placeholder, fields }: SimpleMDEProps) => {
  // eslint-disable-next-line
  const { ref, ...allProps } = fields;
  return <SimpleMDENext placeholder={placeholder} {...allProps} />;
};

export default SimpleMDE;
