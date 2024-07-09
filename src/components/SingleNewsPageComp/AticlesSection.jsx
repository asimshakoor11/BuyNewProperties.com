import React, { useEffect } from 'react'
import './AritcleSection.css'

const AticlesSection = ({title}) => {

    {
        let firstOfset = 0; $(document).ready(function () {
            let positions = [], get_bottom_off_content = function () { let $content = $('.post-content'), offset = $content.offset(); return $content.outerHeight() + offset.top }, get_positions = function () { $('.post-content').find('h2').each(function (i) { const offset = $(this).offset(); positions['title_' + i] = offset.top - 2 }); return positions }, set_toc_reading = function () {
                let st = $(document).scrollTop(), count = 0; for (let k in positions) {
                    let n = parseInt(k.replace('title_', '')), has_next = typeof positions['title_' + (n + 1)] !== 'undefined', not_next = has_next && st < positions['title_' + (n + 1)], diff = 0, $link = $('.toc-' + k); if (has_next) { diff = (st - positions[k]) / (positions['title_' + (n + 1)] - positions[k]) * 100 } else { diff = (st - positions[k]) / (get_bottom_off_content() - positions[k]) * 100 }
                    $link.find('circle').attr('stroke-dashoffset', Math.round(100 - diff)); if (st >= positions[k] && not_next && has_next) {
                        if (firstOfset !== $('.toc-title_' + n)[0].offsetTop - 100) { firstOfset = $('.toc-title_' + n)[0].offsetTop - 100 }
                        $('.toc-' + k).addClass('toc-reading')
                    } else if (st >= positions[k] && !not_next && has_next) { $('.toc-' + k).removeClass('toc-reading') } else if (st >= positions[k] && !not_next && !has_next) {
                        if (firstOfset !== $('.toc-title_' + n)[0].offsetTop - 100) { firstOfset = $('.toc-title_' + n)[0].offsetTop - 100 }
                        $('.toc-' + k).addClass('toc-reading')
                    }
                    if (st >= positions[k]) { $('.toc-' + k).addClass('toc-already-read') } else { $('.toc-' + k).removeClass('toc-already-read') }
                    if (st < positions[k]) { $('.toc-' + k).removeClass('toc-already-read toc-reading') }
                    count++
                }
            }; get_positions(); $(window).on('resize', function () { get_positions() }); $(document).on('scroll', function () { set_toc_reading(); processChange(); updatePositions() }); const updatePositions = debounce(() => get_positions(), 1000)
        }); const processChange = debounce(() => $('.table-of-contents ul').scrollTop(firstOfset)); function debounce(func, timeout = 40) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => { func.apply(this, args) }, timeout) } }
    }

    return (
        <>
            <article id="post-121759">
                <div class="container flex post-container">
                    <div class="post-content">
                        <h1 className="text-3xl font-semibold mb-4">{title}</h1>

                        <div class=" entry-content row-2 py-4" id="How-to-buy-a-property-in-Portugal">

                            <h2 className="text-2xl font-bold mb-4">Buy Property In Portugal</h2>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>

                        </div>
                        <div class=" entry-content row-4" id="How-to-sell-a-property-in-Portugal">

                            <h2 className="text-2xl font-bold mb-4">Sell Property In Portugal</h2>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>

                        </div>
                        <div class=" entry-content row-6  " id="How-to-buy-a-property-in-Porto">
                            <h2 className="text-2xl font-bold mb-4">Buy Property In Porto</h2>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                        </div>
                        <div class=" entry-content row-10 " id='How-to-sell-a-property-in-Porto'>
                            <h2 className="text-2xl font-bold mb-4">Sell Property In Porto</h2>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                        </div>

                    </div>

                    <aside class="table-of-contents">
                        <div>
                            <p>Table of Contents</p>
                            <ul>
                                <li><a href="#How-to-buy-a-property-in-Portugal" class="toc-title_0 font-medium">
                                    <svg viewBox="0 0 36 36" height="36px" width="36px" y="0px" x="0px">
                                        <circle transform="rotate(-90 18 18)" strokeDashoffset="100" strokeDasharray="100 100"
                                            r="16" cy="18" cx="18" strokeWidth="2" fill="none" />
                                    </svg>
                                    How to buy a property in Portugal</a></li>
                                <li><a href="#How-to-sell-a-property-in-Portugal" class="toc-title_1  font-medium">
                                    <svg viewBox="0 0 36 36" height="36px" width="36px" y="0px" x="0px">
                                        <circle transform="rotate(-90 18 18)" stroke-dashoffset="100" strokeDasharray="100 100"
                                            r="16" cy="18" cx="18" strokeWidth="2" fill="none" />
                                    </svg>
                                    How to sell a property in Portugal</a></li>
                                <li><a href="#How-to-buy-a-property-in-Porto" class="toc-title_2  font-medium">
                                    <svg viewBox="0 0 36 36" height="36px" width="36px" y="0px" x="0px">
                                        <circle transform="rotate(-90 18 18)" stroke-dashoffset="100" strokeDasharray="100 100"
                                            r="16" cy="18" cx="18" strokeWidth="2" fill="none" />
                                    </svg>
                                    How to buy a property in Porto</a></li>
                                <li><a href="#How-to-sell-a-property-in-Porto" class="toc-title_3  font-medium">
                                    <svg viewBox="0 0 36 36" height="36px" width="36px" y="0px" x="0px">
                                        <circle transform="rotate(-90 18 18)" stroke-dashoffset="100" strokeDasharray="100 100"
                                            r="16" cy="18" cx="18" strokeWidth="2" fill="none" />
                                    </svg>
                                    How to sell a property in Porto</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </article>
        </>
    )
}

export default AticlesSection