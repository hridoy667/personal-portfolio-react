import React from 'react';

export default function Skills() {
    return (
        <div>
            <main id='skills' className='py-6 px-4 sm:p-6 md:py-10 md:px-8'>
                <div className='max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
                    <div className='relative p-3 col-start-1 row start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
                        <h1 className='mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-3xl'>React</h1>
                        <p className='text-sm leading-4 font-medium text-white sm:text-slate-500 md:text-blue-9'>Skills</p>
                    </div>
                    <div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>

                    </div>
                </div>
            </main>
        </div>
    );
}

