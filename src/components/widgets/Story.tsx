import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  const isAnimated = useSignal(false);

  useVisibleTask$(() => {
    isAnimated.value = true;
  });

  return (
    <div class="company-page">
      <header class="hero">
        <h1 class={`${isAnimated.value ? 'animate-in' : ''}`}>
          We’re on a mission to transform the tech landscape
        </h1>
        <p class="subtitle">
          Founded by innovators, backed by visionaries — building tomorrow's solutions today
        </p>
      </header>

      <main class="content">
        <section class="story">
          <div class="story-content">
            <h2>Our Origin</h2>
            <p>
              Radiant was born from a chance meeting between three tech enthusiasts who shared a vision 
              of revolutionizing how companies operate. What started as a casual conversation about 
              industry challenges evolved into a powerful platform that now serves thousands of 
              businesses worldwide.
            </p>
            <p>
              Today, Radiant transforms organizations by delivering cutting-edge technology 
              solutions, providing unparalleled insights and efficiency through a single, 
              integrated platform.
            </p>
          </div>
          <div class="story-image">
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="Team collaboration" 
              class={`${isAnimated.value ? 'animate-in' : ''}`}
            />
          </div>
        </section>

        <section class="team">
          <h2>Leadership</h2>
          <div class="team-grid">
            <div class="team-member">
              <img src="https://via.placeholder.com/200" alt="Founder 1" />
              <h3>Thomas Riley</h3>
              <p class="role">Co-Founder & CEO</p>
              <p>Visionary leader with 20+ years in tech innovation</p>
            </div>
            <div class="team-member">
              <img src="https://via.placeholder.com/200" alt="Founder 2" />
              <h3>Ben Carter</h3>
              <p class="role">Co-Founder & CTO</p>
              <p>Tech architect behind our core platform</p>
            </div>
            <div class="team-member">
              <img src="https://via.placeholder.com/200" alt="Founder 3" />
              <h3>Natalie West</h3>
              <p class="role">Co-Founder & COO</p>
              <p>Operations expert scaling our global reach</p>
            </div>
          </div>
        </section>

        <section class="backers">
          <h2>Our Backers</h2>
          <p>
            We’re fortunate to be supported by industry-leading investors who share our vision 
            for the future of technology.
          </p>
          <div class="backer-logos">
            <img src="https://via.placeholder.com/150x50" alt="Investor 1" />
            <img src="https://via.placeholder.com/150x50" alt="Investor 2" />
            <img src="https://via.placeholder.com/150x50" alt="Investor 3" />
          </div>
        </section>
      </main>

      <style>
        {`
          .company-page {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .hero {
            text-align: center;
            padding: 4rem 0;
            background: #f8fafc;
          }

          .hero h1 {
            font-size: 2.5rem;
            color: #1e293b;
            max-width: 800px;
            margin: 0 auto 1rem;
          }

          .subtitle {
            font-size: 1.25rem;
            color: #64748b;
            max-width: 600px;
            margin: 0 auto;
          }

          .content {
            padding: 4rem 0;
          }

          .story {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-bottom: 4rem;
            align-items: center;
          }

          .story-content h2 {
            font-size: 1.875rem;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }

          .story-content p {
            color: #64748b;
            line-height: 1.75;
            margin-bottom: 1rem;
          }

          .story-image img {
            width: 100%;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }

          .team {
            margin-bottom: 4rem;
          }

          .team h2 {
            font-size: 1.875rem;
            color: #1e293b;
            text-align: center;
            margin-bottom: 2rem;
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .team-member {
            text-align: center;
          }

          .team-member img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-bottom: 1rem;
          }

          .team-member h3 {
            font-size: 1.25rem;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .role {
            color: #64748b;
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .team-member p:not(.role) {
            color: #94a3b8;
            font-size: 0.875rem;
          }

          .backers {
            text-align: center;
          }

          .backers h2 {
            font-size: 1.875rem;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }

          .backers p {
            color: #64748b;
            max-width: 600px;
            margin: 0 auto 2rem;
          }

          .backer-logos {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .backer-logos img {
            height: 50px;
            opacity: 0.8;
          }

          .animate-in {
            animation: fadeIn 0.5s ease-in;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .story {
              grid-template-columns: 1fr;
            }
            .hero {
              padding: 2rem 0;
            }
            .hero h1 {
              font-size: 1.875rem;
            }
            .subtitle {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
});