'use client'

import Link from 'next/link'
import { useState } from 'react'
import { faq } from '@/data/faq'

const midpoint = Math.ceil(faq.length / 2)
const faqColumns = [faq.slice(0, midpoint), faq.slice(midpoint)]

function FaqAccordion({ items, isAccordion, onToggle }) {
    return (
        <div className="faq">
            <div className="accordion-section">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === item.id ? 'active' : ''}`}
                    >
                        <h5 className="header-area" onClick={() => onToggle(item.id)}>
                            <button className="accordion-btn d-flex align-items-center text-start d-flex position-relative w-100" type="button">
                                {item.question}
                            </button>
                        </h5>
                        <div className="content-area" style={{ display: isAccordion === item.id ? 'block' : 'none' }}>
                            <div className="content-body pt-4">
                                <p className="pra-clr">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Faq1() {
    const [isAccordion, setIsAccordion] = useState(0)
    const handleAccordion = (key) => {
        setIsAccordion((prevState) => (prevState === key ? null : key))
    }

    return (
        <section className="Faqs-section pt-space pb-space">
            <div className="container">
                <div className="faqs-title text-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
                    <Link href="/faq" className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                        FAQ’S
                    </Link>
                    <h2 className="stitle">
                        Frequently asked <span className="fw-400">questions</span>
                    </h2>
                </div>
                <div className="row g-xxl-7 g-lg-6 g-0 justify-content-center">
                    {faqColumns.map((column, index) => (
                        <div key={index} className="col-lg-6">
                            <FaqAccordion
                                items={column}
                                isAccordion={isAccordion}
                                onToggle={handleAccordion}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
