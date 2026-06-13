import React from 'react'
import Logo from '../components/Logo'

const footerLinks = [
  {
    heading: 'Programs',
    links: ['Powerlifting', 'HIIT Blast', 'Iron Cross', 'Power Yoga'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Trainers', 'Blog', 'Careers'],
  },
  {
    heading: 'Contact',
    links: [
      'Koregaon Park, Pune',
      '+91 98765 43210',
      'hello@voltrex.in',
      '6AM – 11PM Daily',
    ],
  },
]

function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/10 px-5 md:px-12 lg:px-16 pt-14 pb-8"
    id='footer'
    >

      {/* ── TOP ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">

        {/* Brand — full width on mobile, 2fr on desktop */}
        <div className="col-span-2 md:col-span-1 md:[grid-column:span_1] lg:[grid-column:1/2]">
          <Logo />
          <p className="text-gray text-sm leading-relaxed max-w-[260px]">
            Pune's most intense fitness destination. Built for those who refuse to settle for average.
          </p>

        </div>

        {/* Link columns */}
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4 className="text-white text-[11px] font-bold tracking-[3px] uppercase mb-5">
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── BOTTOM ── */}
      <div className="border-t border-white/10 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-3 text-[12px] text-gray">
        <span>© 2026 VOLTREX GYM. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
          <span className="text-white/10">·</span>
          <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Use</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer