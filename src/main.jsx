import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const A = "/assets/";
function Arrow() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function Link({ to, children, className = "" }) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}
function Action({ to, children, secondary = false }) {
  return (
    <Link to={to} className={secondary ? "text-link" : "button"}>
      {children}
      <Arrow />
    </Link>
  );
}
const nav = [
  ["Our mission", "/our-mission"],
  ["Research & grants", "/research"],
  ["For professionals", "/professionals"],
  ["For patients", "/patients"],
  ["About", "/about"],
];
function Header({ path }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef();
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="preview-bar">
        A foundation in development. Advancing science in service of care.
      </div>
      <header>
        <div className="header-inner">
          <Link to="/" className="logo">
            <img
              src={A + "evologics-foundation-open-corners-green.svg"}
              alt="Evologics Foundation — Home"
            />
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
          <nav
            id="navigation"
            className={open ? "open" : ""}
            aria-label="Main navigation"
          >
            {nav.map(([label, url]) => (
              <a
                key={url}
                href={url}
                aria-current={path === url ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div>
          <Link to="/" className="logo">
            <img
              src={A + "evologics-foundation-open-corners-white.svg"}
              alt="Evologics Foundation — Home"
            />
          </Link>
          <p>
            Advancing science.
            <br />
            Improving care.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/research/grants">Research & grants</Link>
          <Link to="/professionals">Healthcare professionals</Link>
          <Link to="/patients">Patients & families</Link>
        </div>
        <div>
          <h2>The foundation</h2>
          <Link to="/about">Our purpose & relationship</Link>
          <Link to="/professionals/cme">Continuing education plans</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          Evologics Foundation is a proposed foundation associated with
          Evologics. Programs are in development.
        </p>
        <p>Website prototype · No grant submissions or CME credit available.</p>
      </div>
    </footer>
  );
}
function Notice({ children }) {
  return <div className="notice">{children}</div>;
}
function EditorialPhoto({name,alt,caption}) {
  return <figure className="editorial-photo"><img src={A + name + '.png'} alt={alt} width="1536" height="1024" loading="lazy" decoding="async"/><figcaption>{caption}</figcaption></figure>;
}
function Intro({ title, children, back = "Explore the foundation" }) {
  return (
    <section className="page-intro container">
      <Link className="breadcrumb" to="/">
        {back}
      </Link>
      <h1>{title}</h1>
      <div className="lede">{children}</div>
    </section>
  );
}
function Row({ to, title, children, tag }) {
  return (
    <Link to={to} className="resource-row">
      <div>
        <h3>{title}</h3>
        {tag && <span className="status">{tag}</span>}
        <p>{children}</p>
      </div>
      <Arrow />
    </Link>
  );
}
function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <h1>
            Advancing science.
            <br />
            <span>Improving care.</span>
          </h1>
          <p>
            We are building a foundation to support scientific research and
            research grants, with a clear goal: better medical outcomes and
            better patient care.
          </p>
          <Action to="/research/grants">Explore research & grants</Action>
        </div>
        <figure className="hero-image">
          <div className="corners">
            <img
              src={A + "research.png"}
              alt="Illustrative scene of two biomedical researchers working together at a microscope"
              fetchPriority="high"
            />
          </div>
          <figcaption>
            Careful observation. Shared inquiry. New understanding.
            
          </figcaption>
        </figure>
      </section>
      <section className="focus-section">
        <div className="container split">
          <div>
            <h2>
              Scientific inquiry.
              <br />
              <span>Human purpose.</span>
            </h2>
            <p className="large-copy">
              Better medical outcomes. Better patient care. The purpose behind
              our work.
            </p>
          </div>
          <div>
            <p>
              Progress in medicine depends on asking important questions—and
              giving researchers the support to investigate them. Our proposed
              grant program will support rigorous studies with meaningful
              relevance to patient care.
            </p>
            <p>
              We aim to connect scientific discovery, clinical understanding,
              and education so that what is learned can inform how care is
              delivered.
            </p>
            <Action secondary to="/our-mission">
              Our mission and approach
            </Action>
          </div>
        </div>
      </section>
      <section
        className="container pathways research-pathways"
        aria-label="Research and funding"
      >
        <div className="pathways-intro">
          <h2>
            Support for the{" "}
            <br />
            next important question.
          </h2>
          <p>
            Explore the program we are building and the proposed path from idea
            to study.
          </p>
        </div>
        <div className="pathway-list">
          <Row to="/research" title="Scientific research">
            Our approach to meaningful questions, sound methods, and relevance
            to patient care.
          </Row>
          <Row
            to="/research/grants"
            title="Research grants"
            tag="Program in development"
          >
            Explore the proposed review process and what researchers can expect.
          </Row>
          <Row
            to="/research/apply"
            title="For prospective investigators"
            tag="Application preview"
          >
            Walk through a proposed application using example information.
          </Row>
        </div>
      </section>
      <section className="research-band">
        <div className="container split">
          <div>
            <h2>
              Meaningful research.
              <br />
              Responsible support.
            </h2>
          </div>
          <div>
            <p>
              Our planned approach places scientific rigor, patient relevance,
              and transparent funding relationships at the center of grant
              review.
            </p>
            <p>
              Clear methods and honest reporting matter, including when findings
              are neutral or do not support the original hypothesis.
            </p>
            <Action to="/research/grants">
              How the grant process will work
            </Action>
          </div>
        </div>
      </section>
      <section className="container learning-section">
        <div className="section-heading">
          <h2>
            Knowledge that
            <br />
            supports better care.
          </h2>
          <Link to="/professionals" className="text-link">
            Explore professional education
            <Arrow />
          </Link>
        </div>
        <div className="editorial-grid">
          <div>
            <EditorialPhoto name="collaboration" alt="Illustrative scene of three healthcare professionals discussing a study" caption="Bringing evidence into the conversation."/>
            <Row to="/professionals" title="For healthcare professionals">
              Planned resources for interpreting research, evaluating evidence,
              and applying learning to clinical conversations.
            </Row>
            <Row
              to="/professionals/cme"
              title="Continuing medical education"
              tag="CME preview — no credit available"
            >
              Explore our plans for future accredited learning opportunities.
            </Row>
          </div>
          <div>
            <EditorialPhoto name="care" alt="Illustrative scene of an older patient speaking with a physician" caption="Keeping the person at the center of care."/>
            <Row to="/patients" title="For patients & families">
              Accessible education to support understanding and informed
              conversations with a care team.
            </Row>
            <Row
              to="/patients/preparing-for-your-appointment"
              title="Preparing for your appointment"
              tag="Printable worksheet · Draft"
            >
              A practical place to organize your questions and priorities.
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}
const patientTopics = [
  "Understanding medical evidence",
  "Treatment conversations",
  "Questions about surgery",
  "Recovery conversations",
  "Discussing care goals",
  "Understanding patient outcomes",
  "Understanding research",
];
const professionalTopics = [
  ["Clinical conversations", "Shared decision-making"],
  ["Clinical conversations", "Multidisciplinary care"],
  ["Research literacy", "Evaluating clinical outcomes"],
  ["Research literacy", "Critical appraisal of clinical research"],
  ["Clinical conversations", "Discussing care goals"],
];
function TopicDetail({ name, professional = false }) {
  return (
    <section className="topic-detail" aria-live="polite">
      <h2>{name}</h2>
      <span className="status">
        {professional ? "Nonaccredited topic preview" : "Topic preview"}
      </span>
      <p>
        {professional
          ? "This planned learning topic will explore the evidence, uncertainties, and questions relevant to clinical practice."
          : "This planned resource will offer an approachable introduction and questions to discuss with your healthcare team."}
      </p>
      <p>
        Full content, sources, and review information will be added after
        editorial review.
      </p>
      {!professional && (
        <Action secondary to="/patients/preparing-for-your-appointment">
          Prepare your own questions
        </Action>
      )}
    </section>
  );
}
function Patients() {
  const [selected, setSelected] = useState(
    patientTopics.includes(new URLSearchParams(location.search).get("topic"))
      ? new URLSearchParams(location.search).get("topic")
      : "",
  );
  return (
    <>
      <Intro title="Understanding starts with your questions.">
        <p>
          Our patient resources are being developed to help you learn, organize
          your thoughts, and have informed conversations with your healthcare
          team.
        </p>
      </Intro>
      <section className="container content-layout">
        <aside>
          <EditorialPhoto name="care" alt="Illustrative patient and physician discussing care" caption="A space for your questions."/>
          <h2>For patients & families</h2>
          <p>Clear information for informed conversations about care.</p>
          <p className="muted">
            Resources are in development. Topic previews are not medical
            guidance.
          </p>
        </aside>
        <div>
          <Row
            to="/patients/preparing-for-your-appointment"
            title="Preparing for your appointment"
            tag="Draft worksheet · Ready to preview"
          >
            A simple, printable space for the things you want to discuss.
          </Row>
          <h2 className="list-title">Explore planned topics</h2>
          {patientTopics.map((t) => (
            <button
              key={t}
              className={"topic-button " + (selected === t ? "selected" : "")}
              onClick={() => setSelected(selected === t ? "" : t)}
              aria-expanded={selected === t}
            >
              {t}
              <span>{selected === t ? "Close preview" : "Preview"}</span>
            </button>
          ))}
          {selected && <TopicDetail name={selected} />}
        </div>
      </section>
    </>
  );
}
function Professionals() {
  const [filter, setFilter] = useState("All topics");
  const [topic, setTopic] = useState("");
  return (
    <>
      <Intro title="Learning in service of better questions.">
        <p>
          A developing education space for healthcare professionals, focused on
          understanding research, evaluating evidence, and informing patient
          care.
        </p>
      </Intro>
      <section className="container content-layout">
        <aside>
          <EditorialPhoto name="collaboration" alt="Illustrative care team reviewing research together" caption="Learning through shared inquiry."/>
          <h2>Professional education</h2>
          <p>Explore the themes that will shape our learning library.</p>
          <Action secondary to="/professionals/cme">
            Future CME
          </Action>
        </aside>
        <div>
          <Notice>
            Nonaccredited topic previews. Educational activities are not yet
            available.
          </Notice>
          <div className="filters" aria-label="Filter learning topics">
            {["All topics", "Clinical conversations", "Research literacy"].map(
              (f) => (
                <button
                  key={f}
                  aria-pressed={filter === f}
                  onClick={() => {
                    setFilter(f);
                    setTopic("");
                  }}
                >
                  {f}
                </button>
              ),
            )}
          </div>
          {professionalTopics
            .filter(([c]) => filter === "All topics" || c === filter)
            .map(([c, t]) => (
              <button
                key={t}
                className="topic-button"
                aria-expanded={topic === t}
                onClick={() => setTopic(topic === t ? "" : t)}
              >
                <span>
                  <small>{c}</small>
                  {t}
                </span>
                <Arrow />
              </button>
            ))}
          {topic && <TopicDetail professional name={topic} />}
        </div>
      </section>
    </>
  );
}
function Focus() {
  return (
    <>
      <Intro title="Advancing research. Supporting better care.">
        <p>
          Our mission is to support scientific research, fund meaningful
          inquiry, and share knowledge—with the goal of better medical outcomes
          and better patient care.
        </p>
      </Intro>
      <section className="container content-layout">
        <aside>
          <h2>Science in service of people</h2>
          <p>
            Our purpose reaches across areas of medicine. We begin with the
            questions that matter to patients, clinicians, and researchers.
          </p>
        </aside>
        <div>
          <h2>Three connected areas of work</h2>
          <Row to="/research" title="Scientific research">
            Support the study of clinically meaningful questions through
            rigorous methods and transparent reporting.
          </Row>
          <Row to="/research/grants" title="Research grants">
            Develop a clear funding process that considers scientific merit,
            feasibility, and relevance to patient care.
          </Row>
          <Row to="/professionals" title="Education and shared knowledge">
            Help care teams and patients understand evidence, its limitations,
            and the questions that remain.
          </Row>
          <h2 className="list-title">The impact we are working toward</h2>
          <p>
            We want research to contribute to better-informed clinical
            decisions, better medical outcomes, and better patient care. These
            are the intended goals of the foundation; funded projects and
            measured results will be shared as the program develops.
          </p>
          <Notice>
            Programs are in development. Research findings and clinical benefits
            cannot be assumed in advance.
          </Notice>
        </div>
      </section>
    </>
  );
}
function Research({ grants = false }) {
  return (
    <>
      <Intro
        title={
          grants
            ? "Research grants, thoughtfully developed."
            : "Research starts with what we don’t yet know."
        }
      >
        <p>
          We are developing a grant program to support scientific research with
          meaningful potential to inform clinical practice and improve patient
          care.
        </p>
      </Intro>
      <section className="container content-layout">
        <aside>
          <h2>A clear research focus</h2>
          <span className="status">Program in development</span>
          <p>
            Funding amounts, dates, eligibility, and final requirements have not
            yet been announced.
          </p>
          <Action to="/research/apply">Preview the application</Action>
        </aside>
        <div>
          <EditorialPhoto name="research" alt="Illustrative biomedical researchers at a microscope" caption="Supporting the people behind the research."/>
          <h2>Questions with scientific purpose</h2>
          <p>
            Proposed studies will be assessed for scientific rigor, feasibility,
            relevance to patient care, and the appropriateness of the proposed
            research. Research priorities, eligible study areas, and any
            product-specific requirements will be defined in the final program
            materials.
          </p>
          <h2 className="list-title">The proposed application process</h2>
          <ol className="process">
            {[
              [
                "Letter of intent",
                "Introduce the research question, investigator, and study approach.",
              ],
              [
                "Invited proposal",
                "Develop the protocol, budget, timeline, and required disclosures.",
              ],
              [
                "Scientific review",
                "Evaluate the question, methods, feasibility, and patient relevance.",
              ],
              [
                "Funding decision",
                "Communicate decisions and any award conditions.",
              ],
              [
                "Study reporting",
                "Share progress and findings under the final grant agreement.",
              ],
            ].map(([t, b]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{b}</p>
              </li>
            ))}
          </ol>
          <h2>Transparency belongs in the process.</h2>
          <p>
            The proposed foundation is associated with Evologics. Research may
            include evaluation of Evologics products; any product involvement
            and funding relationships will be disclosed. Final review
            arrangements, conflict disclosures, and reporting expectations will
            be published before applications open.
          </p>
          <Action secondary to="/about">
            About the foundation
          </Action>
        </div>
      </section>
    </>
  );
}
function CME() {
  return (
    <>
      <Intro title="Continuing education. A future chapter.">
        <p>
          We are exploring accredited continuing education opportunities for
          healthcare professionals. Program and provider details will be
          announced when confirmed.
        </p>
      </Intro>
      <section className="container content-layout">
        <aside>
          <h2>No credit available</h2>
          <span className="status">CME preview</span>
          <p>
            There are no active courses, enrollments, assessments, or
            certificates in this prototype.
          </p>
        </aside>
        <div>
          <h2>What the learning experience could include</h2>
          <div className="plain-block">
            <h3>Focused educational activities</h3>
            <p>
              Clearly stated learning objectives, audience information, faculty
              disclosures, and supporting references.
            </p>
          </div>
          <div className="plain-block">
            <h3>A straightforward learner journey</h3>
            <p>
              Activity details, learning materials, and—when an accredited
              program is established—the appropriate assessment and credit
              process.
            </p>
          </div>
          <div className="plain-block">
            <h3>Provider details before participation</h3>
            <p>
              Any future accredited activity will identify its responsible
              provider and applicable credit information before enrollment.
            </p>
          </div>
          <Notice>
            American Amnion Association is a proposed education partner. The
            provider arrangement and scope of any future credit remain to be
            confirmed.
          </Notice>
          <Action secondary to="/professionals">
            Explore professional topics
          </Action>
        </div>
      </section>
    </>
  );
}
function Worksheet() {
  return (
    <>
      <Intro title="Preparing for your appointment.">
        <p>
          A place to gather your thoughts before speaking with your care team.
          Print this draft worksheet and complete it privately.
        </p>
        <button className="button" onClick={() => window.print()}>
          Print worksheet
          <Arrow />
        </button>
      </Intro>
      <section className="container worksheet">
        <Notice>
          Draft conversation tool. This page does not collect or save
          information.
        </Notice>
        {[
          "What I would like to understand",
          "Experiences or symptoms I want to discuss",
          "How this affects my daily life",
          "Previous care I want to mention",
          "My priorities and questions",
          "Notes and next steps from my visit",
        ].map((t) => (
          <div className="writing-space" key={t}>
            <h2>{t}</h2>
            <div />
            <div />
            <div />
          </div>
        ))}
      </section>
    </>
  );
}
const fields = [
  ["Investigator name", "Institution"],
  ["Research question", "Product, intervention, or area of study"],
  ["Study approach", "Relevance to patient care"],
  ["Proposed budget and timing", "Relationships and potential conflicts"],
];
const examples = [
  "Alex Morgan (example)",
  "Example Research Institution",
  "How could patient-reported outcomes be assessed in a prospective study?",
  "Clinical area and any product involvement to be defined in the protocol",
  "Prospective study concept; methods and review requirements to be developed",
  "Define outcomes that reflect patient priorities",
  "Illustrative budget and schedule to be determined",
  "Example disclosure: funding would be requested from the proposed Evologics-associated foundation",
];
function Apply() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState([]);
  const [done, setDone] = useState(false);
  const head = useRef();
  function go(n) {
    setStep(n);
    setErrors([]);
    setTimeout(() => head.current?.focus(), 0);
  }
  function next(e) {
    e.preventDefault();
    let missing = (fields[step] || []).filter((f) => !data[f]?.trim());
    setErrors(missing);
    if (!missing.length) {
      if (step === 4) {
        setDone(true);
        setTimeout(() => head.current?.focus(), 0);
      } else go(step + 1);
    }
  }
  function reset() {
    setData({});
    setDone(false);
    go(0);
  }
  return (
    <>
      <Intro title="Explore the grant application.">
        <p>
          Walk through a proposed application experience using example
          information.
        </p>
      </Intro>
      <section className="container application">
        <Notice>
          <strong>Preview only — nothing is submitted.</strong> Use fictional
          information. Entries remain only in this page’s memory and disappear
          when you leave or reload.
        </Notice>
        {done ? (
          <div className="complete">
            <h2 ref={head} tabIndex="-1">
              Preview complete.
            </h2>
            <p>
              No application has been submitted. The grant program is still in
              development.
            </p>
            <button className="button" onClick={reset}>
              Start again
            </button>
            <Action secondary to="/research/grants">
              Return to research grants
            </Action>
          </div>
        ) : (
          <>
            <ol className="steps">
              {[
                "Investigator",
                "Research question",
                "Study design",
                "Planning",
                "Review",
              ].map((s, i) => (
                <li key={s} aria-current={step === i ? "step" : undefined}>
                  <span>{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="form-title">
              <h2 ref={head} tabIndex="-1">
                {
                  [
                    "Introduce the investigator",
                    "Define the question",
                    "Describe the approach",
                    "Outline your plans",
                    "Review the example",
                  ][step]
                }
              </h2>
              <button
                className="text-link"
                onClick={() => {
                  setData(
                    Object.fromEntries(
                      fields.flat().map((f, i) => [f, examples[i]]),
                    ),
                  );
                  setErrors([]);
                }}
              >
                Fill with example data
              </button>
            </div>
            <form onSubmit={next} noValidate>
              {errors.length > 0 && (
                <p className="error" role="alert">
                  Please complete: {errors.join(", ")}. You can use the example
                  data button.
                </p>
              )}
              {step < 4 ? (
                fields[step].map((f) => (
                  <div className="field" key={f}>
                    <label htmlFor={f.toLowerCase().replaceAll(" ", "-")}>
                      {f} <span>(required)</span>
                    </label>
                    <textarea
                      id={f.toLowerCase().replaceAll(" ", "-")}
                      rows={step === 0 ? 2 : 4}
                      value={data[f] || ""}
                      onChange={(e) =>
                        setData({ ...data, [f]: e.target.value })
                      }
                      aria-invalid={errors.includes(f)}
                      aria-describedby={
                        errors.includes(f)
                          ? f.toLowerCase().replaceAll(" ", "-") + "-error"
                          : undefined
                      }
                    />
                    {errors.includes(f) && (
                      <p
                        id={f.toLowerCase().replaceAll(" ", "-") + "-error"}
                        className="error"
                      >
                        Enter an example response.
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <>
                  <dl className="review-list">
                    {fields.flat().map((f) => (
                      <React.Fragment key={f}>
                        <dt>{f}</dt>
                        <dd>{data[f]}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                  <h3>Documents for a future application</h3>
                  <p>
                    Protocol, investigator qualifications, budget, and relevant
                    review documentation. Final requirements are pending. File
                    upload is unavailable in this preview.
                  </p>
                </>
              )}
              <div className="form-actions">
                {step > 0 && (
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => go(step - 1)}
                  >
                    Back
                  </button>
                )}
                <button className="button" type="submit">
                  {step === 4 ? "Finish preview" : "Continue"}
                  <Arrow />
                </button>
                <button type="button" className="reset" onClick={reset}>
                  Reset preview
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </>
  );
}
function About() {
  return (
    <>
      <Intro title="Research with purpose. Better care as our goal.">
        <p>
          Evologics Foundation is a proposed nonprofit foundation being
          developed to support scientific research, research grants, and
          education in service of better medical outcomes and better patient
          care.
        </p>
      </Intro>
      <section className="container content-layout">
        <aside>
          <h2>Our mission</h2>
          <p>
            To support scientific research, fund meaningful inquiry, and share
            knowledge that contributes to better medical outcomes and better
            patient care.
          </p>
        </aside>
        <div>
          <h2>Connected to Evologics. Clear about our role.</h2>
          <p>
            The proposed foundation is associated with Evologics. Our planned
            work centers on scientific research and grants, supported by
            professional learning and patient education. Studies may evaluate
            Evologics products; those relationships will be clearly disclosed.
          </p>
          <p>
            That relationship should be visible wherever it is relevant.
            Research questions will be presented as questions, with funding
            relationships and potential conflicts disclosed.
          </p>
          <h2 className="list-title">Building the foundation thoughtfully</h2>
          <p>
            Governance, entity status, leadership, grant administration,
            editorial review, and education-provider arrangements are being
            developed. We will share confirmed information as these plans take
            shape.
          </p>
          <h2 className="list-title">Our editorial commitment</h2>
          <p>
            Future clinical resources should identify sources, review
            information, and the limits of current evidence. The topic previews
            on this site describe planned content; they are not completed
            medical guidance.
          </p>
          <Action secondary to="/contact">
            Contact information
          </Action>
        </div>
      </section>
    </>
  );
}
function Contact() {
  return (
    <>
      <Intro title="Let’s make room for conversation.">
        <p>Foundation contact channels are being established.</p>
      </Intro>
      <section className="container narrow end-space">
        <Notice>
          Contact details will be published when confirmed. This prototype does
          not collect messages.
        </Notice>
        <h2>In the meantime, explore our plans.</h2>
        <Row to="/research/grants" title="Research inquiries">
          Review the proposed program and application preview.
        </Row>
        <Row to="/professionals/cme" title="Education inquiries">
          Explore the planned professional learning experience.
        </Row>
      </section>
    </>
  );
}
const routes = {
  "/": Home,
  "/patients": Patients,
  "/professionals": Professionals,
  "/our-mission": Focus,
  "/research": Research,
  "/research/grants": () => <Research grants />,
  "/research/apply": Apply,
  "/professionals/cme": CME,
  "/patients/preparing-for-your-appointment": Worksheet,
  "/about": About,
  "/contact": Contact,
};
const requestedPath = location.pathname.replace(/\/$/, "") || "/";
// Keep existing bookmarks working while removing the retired specialty URL.
const path =
  requestedPath === "/our-focus/endometriosis" ? "/our-mission" : requestedPath;
if (path !== requestedPath) history.replaceState(null, "", path);
const Page =
  routes[path] ||
  (() => (
    <Intro title="This page isn’t here.">
      <Action to="/">Return to the foundation</Action>
    </Intro>
  ));
function App() {
  useEffect(() => {
    const h = document.querySelector("h1");
    document.title =
      (path === "/"
        ? "Education & Research"
        : h?.textContent || "Page not found") + " | Evologics Foundation";
  }, []);
  return (
    <>
      <Header path={path} />
      <main id="main">
        <Page />
      </main>
      <Footer />
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
