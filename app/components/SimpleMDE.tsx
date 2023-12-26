'use client';
import dynamic from 'next/dynamic';
import React, { ForwardRefRenderFunction } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
const SimpleMDENext = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

interface SimpleMDEProps {
  placeholder: string;
  fields: ControllerRenderProps<
    {
      title: string;
      description: string;
    },
    'description'
  >;
}

const SimpleMDE = ({ placeholder, fields }: SimpleMDEProps) => {
  const { ref, ...allProps } = fields;

  return <SimpleMDENext placeholder={placeholder} {...allProps} />;
};

export default SimpleMDE;
