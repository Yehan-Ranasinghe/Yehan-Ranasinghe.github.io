import classNames from 'classnames';
import {FC, memo, forwardRef, ReactNode} from 'react';
import {SectionId} from '../../data/data';

// Forwarding the ref to the section element
const Section = forwardRef<
  HTMLDivElement,
  {
    sectionId: SectionId;
    sectionTitle?: string;
    noPadding?: boolean;
    className?: string;
    children: ReactNode;
  }
>(({children, sectionId, noPadding = false, className}, ref) => {
  return (
    <section
      ref={ref} // Assigning the ref here
      className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})}
      id={sectionId}>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
