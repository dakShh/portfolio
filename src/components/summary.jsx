import clsx from 'clsx';
import React, { useEffect } from 'react';
import VerticalTimeline from './verticalTimeline';

import { useInView } from 'react-intersection-observer';

const Summary = ({ isInView }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    useEffect(() => {
        isInView(inView);
    }, [inView]);
    return (
        <div id="about" className="pt-20 relative mt-36 lg:mt-56 min-h-screen  text-white px-5">
            <div className="flex flex-col md:items-center mb-32 ">
                <div
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    className={clsx(
                        'text-3xl lg:text-5xl font-extrabold',
                        'mb-4',
                        'underline underline-offset-4'
                    )}
                >
                    Summary
                </div>
                <p
                    data-aos="zoom-in-up"
                    data-aos-delay="400"
                    className={clsx('max-w-xs md:max-w-xl xl:lg:max-w-2xl', 'text-lg md:text-center')}
                >
                    A Determined and productive web developer with a passion for creative solutions. Able to
                    effectively self manage during independent projects, as well as collaborate in a team
                    setting. Equipped in diverse and promising skill set.
                </p>
            </div>

            <div className="my-10" ref={ref}>
                <div
                    data-aos="zoom-in-up"
                    data-aos-delay="400"
                    className={clsx(
                        'text-3xl lg:text-5xl font-extrabold',
                        'max-w-[170px] md:max-w-[9999px] w-full',
                        'md:text-center',
                        'underline underline-offset-4',
                        'mb-10'
                    )}
                >
                    Education & Experience
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="800"
                    className="md:px-[170px] lg:px-[220px] xl:px-0"
                >
                    <VerticalTimeline />
                </div>
            </div>
        </div>
    );
};

export default Summary;
