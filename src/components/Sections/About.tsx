import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;

  return (
    <Section className="bg-neutral-800 py-12" sectionId={SectionId.About}>
      <div className={classNames('grid gap-y-8 md:grid-cols-4', {'md:gap-x-12': !!profileImageSrc})}>
        {/* Profile Image */}
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-64 w-64 overflow-hidden rounded-xl md:h-48 md:w-48">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Let me introduce myself</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base leading-relaxed">{description}</p>
          </div>

          {/* About Items */}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex items-start gap-x-3" key={idx}>
                {Icon && <Icon className="h-5 w-5 flex-shrink-0 text-white" />}
                <div>
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className="text-sm text-gray-300 ml-1">{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
