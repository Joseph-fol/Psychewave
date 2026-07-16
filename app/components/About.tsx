import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24 bg-[#f8fdff]" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#3ba1fe] mb-4">
              About Psychewave
            </p>
            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              A logistics network built like software.
            </h2>
            <p className="text-lg text-foreground/70 mb-4">
              Psychewave started with a simple frustration: logistics in fast-growing markets is capable, but rarely legible. Packages move, but nobody can see them move. We rebuilt the pipeline pickup, transit, verification, delivery as a single connected system instead of five disconnected handoffs.
            </p>
            <p className="text-lg text-foreground/70">
              Every parcel gets a digital identity the moment it's picked up, and a QR handshake the moment it's handed over. That's the whole idea: fewer surprises, more certainty, for individuals and businesses shipping every day.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-112.5 w-full">
            <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image of a person dispatching</span>
            </div>
            {/* 
              <Image 
                src="/image-path.jpg" 
                alt="A person dispatching a package" 
                layout="fill" 
                objectFit="cover"
                className="rounded-xl"
              /> 
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
