// src/components/ContactFormClient.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import your existing ContactForm on client only
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false }) as React.ComponentType<Props>;

type Props = { className?: string };

export default function ContactFormClient(props: Props) {
  return <ContactForm {...props} />;
}
