import React from 'react'
import Farmer from '../../assets/images/reviews/farmer.png'
import Stars from '../../assets/images/reviews/stars.png'

function Reviews () {
  return (
        <div className={'bg-white-500 md:bg-white-000 mb-[82px] md:mb-[214px] pt-5 max-w-screen-2xl mx-auto'}>
            <div className={'w-[104px] mx-auto bg-primary-100 rounded-[50px] h-10 flex justify-center' +
                ' items-center uppercase text-violet-200 text-sm font-medium'}>
                Reviews
            </div>

            <h3 className={'text-[20px] md:text-5xl font-semibold md:font-bold leading-[29px] leading-[58px]' +
                ' text-black-100 w-[218px] md:w-[646px] mx-auto text-center mt-[26px] mb-[77px] md:mb-[87px]' +
                ' tracking-[-1.92px]'}>
                Here’s what our amazing clients are saying
            </h3>

            <div className={'flex flex-wrap gap-10 bg-reviews-bg bg-no-repeat z-[99] bg-center justify-center'}>
                <div className={'w-[530px] bg-white-000 px-[42px] py-12 shadow-4xl'}>
                    <div className={'flex gap-x-5'}>
                        <img src={Farmer} alt="Farmer" className={'rounded-[50px] h-[88px] w-[88px]'}/>
                        <div>
                            <h3 className={'text-2xl font-bold text-black-100'}>Shaun Stevens</h3>
                            <h6 className={'text-base text-gray-600'}>Founder @CraftLab</h6>
                            <img src={Stars} alt="Stars"/>
                        </div>
                    </div>
                    <div>
                        <p className={'text-gray-600 text-[18px] mt-10'}>
                            &quot;This app did a great job! My new website is so much more professional,
                            good looking and easier to work with than my old site.&quot;
                        </p>
                    </div>
                </div>
                <div className={'w-[530px] bg-white-000 px-[42px] py-12 shadow-4xl'}>
                    <div className={'flex gap-x-5'}>
                        <img src={Farmer} alt="Farmer" className={'rounded-[50px] h-[88px] w-[88px]'}/>
                        <div>
                            <h3 className={'text-2xl font-bold text-black-100'}>Shaun Stevens</h3>
                            <h6 className={'text-base text-gray-600'}>Founder @CraftLab</h6>
                            <img src={Stars} alt="Stars"/>
                        </div>
                    </div>
                    <div>
                        <p className={'text-gray-600 text-[18px] mt-10'}>
                            &quot;I have been using the farming app for a while now and I must say, I am impressed.
                            The app has been very helpful in keeping me updated on the weather forecast,
                            pests and diseases that could affect my crops, and even providing me with tips
                            on how to improve my yields. I also had a great time getting the right tools to
                            complete my project&quot;
                        </p>
                    </div>
                </div>
                <div className={'w-[530px] bg-white-000 px-[42px] py-12 shadow-4xl'}>
                    <div className={'flex gap-x-5'}>
                        <img src={Farmer} alt="Farmer" className={'rounded-[50px] h-[88px] w-[88px]'}/>
                        <div>
                            <h3 className={'text-2xl font-bold text-black-100'}>Shaun Stevens</h3>
                            <h6 className={'text-base text-gray-600'}>Founder @CraftLab</h6>
                            <img src={Stars} alt="Stars"/>
                        </div>
                    </div>
                    <div>
                        <p className={'text-gray-600 text-[18px] mt-10'}>
                            &quot;This app did a great job! My new website is so much more professional,
                            good looking and easier to work with than my old site.&quot;
                        </p>
                    </div>
                </div>
                <div className={'w-[530px] bg-white-000 px-[42px] py-12 shadow-4xl'}>
                    <div className={'flex gap-x-5'}>
                        <img src={Farmer} alt="Farmer" className={'rounded-[50px] h-[88px] w-[88px]'}/>
                        <div>
                            <h3 className={'text-2xl font-bold text-black-100'}>Shaun Stevens</h3>
                            <h6 className={'text-base text-gray-600'}>Founder @CraftLab</h6>
                            <img src={Stars} alt="Stars"/>
                        </div>
                    </div>
                    <div>
                        <p className={'text-gray-600 text-[18px] mt-10'}>
                            &quot;This app did a great job! My new website is so much more professional,
                            good looking and easier to work with than my old site.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Reviews
