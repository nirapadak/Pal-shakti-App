import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      <section className="section reveal">
        <h2>আমাদের পরিচিতি</h2>
        <p>
          সমিতি পালপাড়ার একটি সামাজিক সংগঠন, যার লক্ষ্য ঐক্য,
          উন্নয়ন এবং পারস্পরিক সহযোগিতার মাধ্যমে সমাজকে এগিয়ে নেওয়া।
        </p>
      </section>

      <section className="section reveal">
        <h2>আমাদের লক্ষ্য</h2>
        <p>
          শিক্ষার প্রসার, সামাজিক উন্নয়ন এবং সাংস্কৃতিক কর্মকাণ্ডের
          মাধ্যমে একটি সুন্দর সমাজ গড়ে তোলা।
        </p>
      </section>

      <section className="section reveal">
        <h2>আমাদের কার্যক্রম</h2>
        <p>
          সমাজসেবা, শিক্ষা সহায়তা, সচেতনতা কর্মসূচি এবং বিভিন্ন
          সামাজিক উদ্যোগ গ্রহণ করা।
        </p>
      </section>
    </div>
  );
};

export default About;
