import { faqs } from '@/shared/constants'
import { SectionHeading } from '@/shared/components'

export function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-inner">
        <SectionHeading eyebrow="A few answers" title="Frequently asked questions" description="A little more detail on the work, tools, and process." />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" data-reveal key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}