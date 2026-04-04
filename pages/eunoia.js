import Container from "@/components/container";
import Layout from "@/components/layout";
import Link from "next/link";

const coreSkills = [
  {
    en: "Thinking",
    ko: "사고력",
    desc: "Critically interpreting information and generating meaningful questions.",
  },
  {
    en: "Communication",
    ko: "의사소통",
    desc: "Expressing ideas logically and persuasively through writing and speech.",
  },
  {
    en: "Collaboration",
    ko: "협업",
    desc: "Working with others toward a shared goal by sharing roles and responsibilities.",
  },
  {
    en: "Creativity",
    ko: "창의성",
    desc: "Proposing new interpretations and solutions beyond conventional thinking.",
  },
  {
    en: "Problem Solving",
    ko: "문제해결",
    desc: "Structuring real-world problems and developing actionable solutions.",
  },
  {
    en: "Human Judgment",
    ko: "인간적 판단",
    desc: "Critically evaluating AI-generated results and making decisions grounded in ethics and values.",
  },
];

const programs = [
  {
    title: "Museum-Based Learning",
    ko: "박물관 기반 체험 교육",
    desc: "Partnering with art, history, and science museums for hands-on sessions that go beyond a field trip. Students observe, interpret, discuss, and write — building critical thinking and expressive skills through direct encounter with culture and history.",
    skills: ["Critical Thinking", "Observation", "Expression"],
  },
  {
    title: "Educational Travel",
    ko: "교육여행 프로그램",
    desc: "Structured trips designed as 'thoughtful journeys' — not simple sightseeing. Students prepare through reading beforehand, engage deeply on-site, and reflect through writing afterward. Every destination becomes a learning experience.",
    skills: ["Contextual Understanding", "Global Sensitivity", "Self-Directed Learning"],
  },
  {
    title: "Reading & Writing",
    ko: "읽기 · 쓰기 프로그램",
    desc: "Centered on classic texts, nonfiction, and cultural literature. Students practice generating questions, critical reading, essay writing, and personal reflection. AI is used only as a limited feedback and expansion tool — not a replacement for thinking.",
    skills: ["Logical Thinking", "Self-Expression", "Metacognition"],
  },
  {
    title: "History & Culture",
    ko: "역사 · 문화 통합 교육",
    desc: "Connecting Korean history, world history, and contemporary issues so students can interpret the present through the past. K-Culture serves as a bridge to identity, and cross-cultural comparisons build genuine global awareness.",
    skills: ["Cultural Literacy", "Identity", "Global Citizenship"],
  },
];

export default function EunoiaPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-6 py-2 bg-[#e8703a] rounded-full mb-6">
              <span className="font-bold">Future Education • 미래교육</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl xl:text-6xl">
              Eunoia
            </h1>
            <p className="mb-4 text-2xl font-semibold md:text-3xl">
              유노이아 미래교육센터
            </p>
            <p className="max-w-2xl mx-auto mb-4 text-base italic text-white/70">
              From the Greek — <em>εὔνοια</em> — meaning "Beautiful Thinking" and "Well Minded"
            </p>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-white/90">
              An education platform for the AI age that returns to what matters most: the capacity to think deeply, ask questions, understand others, and express what you know.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Eunoia */}
      <section className="py-16 bg-white md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Why This Matters Now
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              As AI takes over information retrieval and analysis, the skills that will matter most are the ones AI cannot replicate: deep reading and writing, critical thinking, cultural understanding, empathy, and the ability to form and express original ideas.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              AI 시대일수록, 인간에게 요구되는 역량과 교육의 방향은 더욱 분명해집니다 — 깊이 생각하는 힘, 질문하는 능력, 타인과 문화를 이해하는 감수성, 그리고 자신의 생각을 언어로 정리하고 표현하는 능력입니다.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Conventional schooling — focused on test performance and information delivery — often leaves little room for the kind of experiential, reflective learning that builds these capacities. Eunoia fills that gap, not by replacing school, but by deepening what school cannot provide on its own.
            </p>

            {/* Pull quote */}
            <blockquote className="mt-10 border-l-4 border-[#e8703a] pl-6 py-2">
              <p className="text-xl font-semibold text-[#1e3a5f] leading-relaxed">
                "Success in the AI age is not about being ahead of others — it's about becoming someone who cannot easily be replaced."
              </p>
              <p className="mt-2 text-gray-500 text-sm">
                AI 시대의 성공은 '남들보다 앞서는 것'이 아니라, '쉽게 대체되지 않는 사람'이 되는 것입니다.
              </p>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] to-white md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3">
                What We Offer
              </h2>
              <p className="text-2xl font-medium text-gray-500">핵심 프로그램</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {programs.map((p) => (
                <div
                  key={p.title}
                  className="p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#e8703a] transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-1">{p.title}</h3>
                  <p className="text-sm font-medium text-[#e8703a] mb-4">{p.ko}</p>
                  <p className="text-gray-700 leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 text-xs font-semibold bg-[#e0e7ef] text-[#1e3a5f] rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6 Core Skills */}
      <section className="py-16 bg-[#1e3a5f] md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                The 6 Core Skills
              </h2>
              <p className="text-xl text-white/70">
                6대 핵심 역량 — skills AI cannot replace
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {coreSkills.map((skill) => (
                <div
                  key={skill.en}
                  className="p-6 bg-white/10 border border-white/20 rounded-2xl"
                >
                  <div className="mb-2">
                    <span className="text-xl font-bold text-white">{skill.en}</span>
                    <span className="ml-2 text-sm font-medium text-[#e8703a]">{skill.ko}</span>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-10 text-center">
              Who It's For
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl border-2 border-gray-100 text-center">
                <p className="text-4xl font-extrabold text-[#e8703a] mb-2">1–3</p>
                <p className="font-bold text-[#1e3a5f] mb-1">Grades 1–3</p>
                <p className="text-sm text-[#e8703a] font-medium mb-3">탐구와 표현 중심</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Exploration and creativity. Observation, storytelling, hands-on making, and early expression skills.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl border-2 border-gray-100 text-center">
                <p className="text-4xl font-extrabold text-[#e8703a] mb-2">4–6</p>
                <p className="font-bold text-[#1e3a5f] mb-1">Grades 4–6</p>
                <p className="text-sm text-[#e8703a] font-medium mb-3">사고력 확장 · 논리적 표현</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Critical thinking and logical expression. Reading, writing, argumentation, summary, and collaborative projects.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl border-2 border-gray-100 text-center">
                <p className="text-4xl font-extrabold text-[#e8703a] mb-2">7–12</p>
                <p className="font-bold text-[#1e3a5f] mb-1">Grades 7–12</p>
                <p className="text-sm text-[#e8703a] font-medium mb-3">논리적 사고 · 자기주도 프로젝트</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Independent thinking and leadership. Self-directed projects, persuasive writing, critical analysis, and real-world problem solving.
                </p>
              </div>
            </div>

            <p className="mt-8 text-center text-gray-500 text-sm">
              Teacher and educator training programs also available. / 교사·교육 관계자 연수 프로그램도 운영합니다.
            </p>

            {/* Peak Educenter callout */}
            <div className="mt-10 p-6 bg-[#1e3a5f] border border-[#2c5282] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <p className="text-xs font-semibold text-[#e8703a] uppercase tracking-wide mb-1">Affiliated Center</p>
                <p className="font-bold text-white text-lg">Peak Educenter</p>
                <p className="text-sm text-white/80 mt-1">After-school academic classes, tutoring, and more — expanding to include creative and science programs.</p>
              </div>
              <a
                href="https://www.peakeducenter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center px-6 py-3 text-sm font-bold text-white bg-[#e8703a] rounded-lg hover:bg-[#a85232] transition-all duration-300 shadow-md"
              >
                Visit Site →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] to-white md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Interested in Eunoia?
            </h2>
            <p className="text-xl text-gray-500 mb-2">프로그램에 관심이 있으신가요?</p>
            <p className="mb-10 text-lg leading-relaxed text-gray-700">
              Whether you're a parent looking for enrichment beyond the classroom, a school interested in bringing these programs to your students, or an educator looking for training — reach out and we'll take it from there.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-10 py-4 bg-[#e8703a] text-white font-bold rounded-lg hover:bg-[#a85232] transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                Get In Touch
              </a>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
