import clsx from 'clsx';
import React, { useEffect } from 'react';
import project_list from './project_list';
import ProjectCard from './projectCard';

import { useInView } from 'react-intersection-observer';

const Projects = ({ isInView }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    useEffect(() => {
        isInView(inView);
    }, [inView]);
    return (
        <div className={clsx('container mx-auto relative text-white min-h-screen', 'mb-24', 'px-8')}>
            <div id="projects" className="text-center  pt-20 ">
                <div
                    ref={ref}
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    className={clsx(
                        'text-3xl lg:text-5xl font-extrabold',
                        'mb-10',
                        'underline underline-offset-4'
                    )}
                >
                    Projects
                </div>
            </div>

            <div className={clsx('lg:max-w-3xl xl:max-w-5xl', 'mx-auto', 'lg:pl-4 xl:pl-0')}>
                <div className={clsx('grid md:grid-cols-2 gap-5 xl:gap-16 justify-center')}>
                    {project_list.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            link={project.link}
                            image={project.image}
                            stack={project.stack}
                            delay={project.delay}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
