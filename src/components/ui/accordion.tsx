'use client';

import * as React from 'react';
import { Plus, Minus } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <div
    className="mb-6 p-[1px] bg-[#656565] rounded-2xl"
    style={{
      background:
        'linear-gradient(90deg, rgba(101,101,101,1) 0%, rgba(176,144,187,1) 41%, rgba(126,59,191,1) 100%)',
    }}
  >
    <AccordionPrimitive.Item
      ref={ref}
      className={cn('border rounded-2xl p-8 bg-[#13131A]', className)}
      {...props}
    />
  </div>
));
AccordionItem.displayName = 'AccordionItem';

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between gap-2 font-medium  transition-all group max-md:text-left',
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-6 w-6 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden" />
      <Minus className="h-6 w-6 shrink-0 transition-transform duration-200 group-data-[state=closed]:hidden" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm text-[#D3D3D3] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
