import clsx from 'clsx';
import React, { useState } from 'react';

const IconWrapper = ({ children, icon, delay, content, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen(state) {
        setIsOpen(state);
    }
    return (
        <a href={`${link}`}>
            <div
                data-aos="zoom-in-up"
                data-aos-delay={delay ?? '200'}
                className={clsx(
                    'group relative p-3',
                    'w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]',
                    'rounded-full shadow-md relative  shadow-black/50',
                    'flex justify-center items-center',
                    'backdrop-blur-sm',
                    'bg-white/10',
                    'cursor-pointer',
                    'hover:bg-white/75'
                )}
                onMouseEnter={() => toggleOpen(true)}
                onMouseLeave={() => toggleOpen(false)}
            >
                <div
                    className={clsx(
                        'absolute right-[60px]',
                        `${isOpen ? 'opacity-[1]' : 'invisible opacity-[0]'}`,
                        'transition duration-500',
                        `${isOpen ? 'translate-x-0' : 'translate-x-8'}`,
                        'bg-white/20 backdrop-blur-[3px] rounded-lg px-2 py-1 font-bold ',
                        'text-white',
                        'min-w-[150px]'
                    )}
                >
                    {content}
                </div>
                <i
                    className={clsx(
                        'absolute',
                        'text-xl lg:text-2xl font-base',
                        'text-white group-hover:text-black',
                        `${icon}`
                    )}
                ></i>
            </div>
        </a>
    );
};

export default IconWrapper;
