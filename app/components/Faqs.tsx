import React from 'react'

export default function Faqs() {
  return (
    <section>
        This is the Frequently Asked Questions page.
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        What is Psychewave?
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div class="accordion-body">
                        This is the first item's accordion body.
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}
