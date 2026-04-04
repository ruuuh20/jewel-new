import Container from "@/components/container";
import Layout from "@/components/layout";
import Link from "next/link";
import { HiBookOpen, HiUserGroup, HiSparkles, HiMicrophone } from "react-icons/hi";

export default function GanadaraPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-6 py-2 bg-[#c17854] rounded-full mb-6">
              <span className="font-bold">Korean Language & Culture • 한글문화교육</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold md:text-5xl xl:text-6xl">
              Ganadara Korean Language & Culture
            </h1>

            <p className="mb-4 text-2xl font-semibold md:text-3xl">
              가나다라 한글문화교육
            </p>

            <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed md:text-xl text-white/90">
              From Korean language classes to cultural workshops and school events — we help schools, organizations, and communities bring Korean language and culture to life.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                What We Offer
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                With the global rise of Korean culture — from K-pop and Korean cinema to Korea's education system and global influence — interest in Korean language and culture has never been higher. Ganadara is here to meet that interest in whatever form it takes.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Whether your school wants to offer a Korean language class, your organization is planning a cultural event, or you're looking for a one-time workshop, we can help plan and execute it from start to finish.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 mb-16 md:grid-cols-2">

              <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl border-2 border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#c17854] flex items-center justify-center mb-4">
                  <HiBookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Korean Language Classes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ongoing classes for students of all levels — from complete beginners learning Hangul to heritage speakers building reading and writing skills. Programs are designed to fit different schedules and learning goals.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl border-2 border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#c17854] flex items-center justify-center mb-4">
                  <HiUserGroup className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Cultural Workshops & Events</h3>
                <p className="text-gray-700 leading-relaxed">
                  Interactive workshops covering Korean traditions, customs, and celebrations — including hanbok, calligraphy, traditional music, Korean holidays, and cuisine. Great for diversity days, school festivals, and community events.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl border-2 border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#c17854] flex items-center justify-center mb-4">
                  <HiSparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Cultural Performances & Demonstrations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Arrange performances and live demonstrations — Korean drumming (janggu), traditional dance, K-pop workshops, taekwondo, and more. We coordinate everything so you don't have to.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl border-2 border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#c17854] flex items-center justify-center mb-4">
                  <HiMicrophone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Guest Speakers & Cultural Ambassadors</h3>
                <p className="text-gray-700 leading-relaxed">
                  Connect your students or community with Korean or Korean-American speakers who can share firsthand experiences of Korean life, culture, and identity — sparking meaningful conversations and cross-cultural understanding.
                </p>
              </div>

            </div>

            {/* Who This Is For */}
            <div className="bg-gradient-to-br from-[#f8fafc] to-white p-8 md:p-10 rounded-2xl border-2 border-gray-100 mb-16">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Who This Is For</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="font-bold text-[#1e3a5f] mb-1">Schools & Educators</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Looking to add a Korean language class or bring a cultural program into your curriculum or school event</p>
                </div>
                <div>
                  <p className="font-bold text-[#1e3a5f] mb-1">Community Organizations</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Planning a cultural festival, diversity event, or community workshop and want a Korean cultural component</p>
                </div>
                <div>
                  <p className="font-bold text-[#1e3a5f] mb-1">Students & Families</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Interested in ongoing Korean language learning or connecting with Korean heritage and culture</p>
                </div>
              </div>
            </div>

            {/* Photo Gallery Placeholder */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                Past Programs
              </h3>
              <div className="p-12 text-center bg-gray-100 border-2 border-gray-300 border-dashed rounded-2xl">
                <p className="text-gray-500">
                  Photos from past classes and events
                  <br />
                  <span className="text-sm">(Photos to be added)</span>
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-8 md:p-10 text-white text-center">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Interested? Let's Talk.
              </h3>
              <p className="mb-2 text-xl">
                관심이 있으신가요?
              </p>
              <p className="mb-8 text-lg text-white/80 max-w-2xl mx-auto">
                Whether you're looking to set up a Korean class, plan a cultural event, or just want to explore what's possible — reach out and we'll take it from there.
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-10 py-4 bg-[#c17854] text-white font-bold rounded-lg hover:bg-[#a85232] transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                  Get In Touch
                </a>
              </Link>
            </div>

          </div>
        </Container>
      </section>

    </Layout>
  );
}
