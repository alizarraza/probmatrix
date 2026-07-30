import { useEffect, useState } from "react";

const partners = [
  {
    logo: "/logos/bdo-logo.svg",
    alt: "BDO Pakistan",
    title: "IFRS 9 Specialist",
    description:
      "Supporting BDO engagements with expert guidance across ECL modelling, methodology reviews, validation, implementation, reporting, audit support and regulatory readiness.",
  },
  {
    logo: "/logos/sdvm.png",
    alt: "SDVM South Africa",
    title: "Strategic IFRS 9 Implementation Partner",
    description:
      "SDVM deploys the Probmatrix IFRS 9 Add-In across South African public sector engagements, supported by our specialist advisory expertise whenever required—from implementation and methodology guidance to ECL reporting and governance.",
  },
];

export default function TrustedBy() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % partners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % partners.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? partners.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="section-tight"
      style={{
        borderTop: "1px solid rgba(255,255,255,.06)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 1150,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "2rem",
            marginBottom: 14,
          }}
        >
          Trusted Implementation Partners
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,.65)",
            maxWidth: 650,
            margin: "0 auto 50px",
            lineHeight: 1.7,
          }}
        >
          Working alongside leading advisory and implementation partners to
          deliver enterprise-grade IFRS 9 solutions.
        </p>

        <div className="slider">
          <button className="arrow left" onClick={prev}>
            ❮
          </button>

          <div
            className="slider-track"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {partners.map((partner) => (
              <div className="slide" key={partner.title}>
                <div className="partner-card">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="partner-logo"
                  />

                  <h3>{partner.title}</h3>

                  <p>{partner.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={next}>
            ❯
          </button>
        </div>

        <div className="dots">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .slider{
          position:relative;
          overflow:hidden;
          width:100%;
        }

        .slider-track{
          display:flex;
          transition:transform .6s ease-in-out;
        }

        .slide{
          min-width:100%;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .partner-card{
          width:100%;
          max-width:950px;
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          border-radius:18px;
          padding:45px;
          transition:.3s;
        }

        .partner-card:hover{
          border-color:#2ea8ff;
          box-shadow:0 20px 45px rgba(0,0,0,.25);
        }

        .partner-logo{
          height:72px;
          object-fit:contain;
          margin-bottom:30px;
        }

        .partner-card h3{
          color:#fff;
          margin:0 0 18px;
          font-size:1.8rem;
          line-height:1.3;
        }

        .partner-card p{
          color:rgba(255,255,255,.72);
          line-height:1.9;
          font-size:1.05rem;
          margin:0;
        }

        .arrow{
          position:absolute;
          top:50%;
          transform:translateY(-50%);
          width:48px;
          height:48px;
          border:none;
          border-radius:50%;
          background:rgba(255,255,255,.08);
          color:#fff;
          cursor:pointer;
          font-size:24px;
          transition:.3s;
          z-index:20;
        }

        .arrow:hover{
          background:#0077ff;
        }

        .left{
          left:10px;
        }

        .right{
          right:10px;
        }

        .dots{
          display:flex;
          justify-content:center;
          gap:10px;
          margin-top:30px;
        }

        .dot{
          width:12px;
          height:12px;
          border-radius:50%;
          border:none;
          background:rgba(255,255,255,.25);
          cursor:pointer;
          transition:.3s;
        }

        .dot.active{
          width:34px;
          border-radius:20px;
          background:#2ea8ff;
        }

        @media(max-width:900px){

          .partner-card{
            padding:28px;
          }

          .partner-logo{
            height:56px;
          }

          .partner-card h3{
            font-size:1.4rem;
          }

          .partner-card p{
            font-size:.98rem;
          }

          .arrow{
            display:none;
          }
        }
      `}</style>
    </section>
  );
}