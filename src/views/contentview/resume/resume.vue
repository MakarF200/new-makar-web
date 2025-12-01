<template>
  <div
    class="px-4 py-10 min-h-screen font-sans text-gray-900 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div
      class="p-8 mx-auto max-w-4xl bg-white border border-gray-100 shadow-sm sm:p-12"
    >
      <!-- Header -->
      <header class="pb-8 mb-12 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h1
            class="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Wu Yunyu
          </h1>
          <div>
            <button
              class="rounded-full btn btn-primary btn-2xl"
              @click="downloadResume"
            >
              download
            </button>
          </div>
        </div>
        <p class="mb-6 text-xl font-medium text-gray-600">
          Full-Stack Engineer | React / Next.js / FastAPI / Automation Systems
        </p>

        <div
          class="flex flex-col gap-y-2 gap-x-6 text-sm text-gray-600 sm:flex-row sm:flex-wrap"
        >
          <div class="flex items-center">
            <span class="mr-2 font-semibold">Male · 24 yrs · 2 yrs Exp.</span>
          </div>
          <div class="flex items-center">
            <span class="ml-2">📱</span> +86 18715630190
          </div>
          <div class="flex items-center">
            <span class="ml-2">📧</span>
            <a
              href="mailto:fullstack.makar@gmail.com"
              class="transition-colors hover:text-blue-600"
              >fullstack.makar@gmail.com</a
            >
          </div>
          <div class="flex items-center">
            <span class="ml-2">🌐</span>
            <a
              href="https://www.makar.xin"
              target="_blank"
              class="transition-colors hover:text-blue-600"
              >www.makar.xin</a
            >
          </div>
        </div>
      </header>

      <!-- Summary -->
      <section class="mb-12">
        <h2
          class="pb-2 mb-4 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          Summary
        </h2>
        <p class="leading-relaxed text-gray-700">
          Full-stack engineer with strong experience in
          <strong>React/Next.js</strong>, <strong>FastAPI</strong>, and
          <strong>automation systems</strong>. Skilled in building scalable
          applications, integrating <strong>LLMs (Qwen / LLaMA)</strong>, and
          designing multi-device automation architectures. Capable of owning
          end-to-end development and working with distributed remote teams.
        </p>
      </section>

      <!-- Intention -->
      <section class="mb-12">
        <h2
          class="pb-2 mt-4 mb-4 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          Intention
        </h2>
        <ul
          class="flex justify-between pl-2 space-y-1 list-disc list-inside text-gray-700"
        >
          <li>
            <PointIcon
              class="inline-block w-4 h-4 align-text-bottom"
            />Front-end / Full-stack Engineer (Remote)
          </li>
          <li>
            <PointIcon class="inline-block w-4 h-4 align-text-bottom" />Global
            Opportunities
          </li>
        </ul>
      </section>

      <!-- Education -->
      <section class="mb-12">
        <h2
          class="pb-2 mt-4 mb-4 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          Education
        </h2>
        <div class="mb-4">
          <div
            class="flex flex-col justify-between mb-1 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-xl font-bold text-gray-800">Bengbu University</h3>
            <span class="font-medium text-gray-600">2019.09 – 2023.06</span>
          </div>
          <div class="mb-2 font-medium text-gray-700">
            B.Eng. Mechanical Design, Manufacturing & Automation
          </div>
          <ul
            class="pl-2 space-y-1 text-sm list-disc list-inside text-gray-600"
          >
            <li>
              <PointIcon class="inline-block w-4 h-4 align-text-bottom" />GPA
              Top 20%
            </li>
            <li>
              <PointIcon
                class="inline-block w-4 h-4 align-text-bottom"
              />National & provincial award recipient
            </li>
            <li>
              <PointIcon class="inline-block w-4 h-4 align-text-bottom" />Holder
              of a utility model patent
            </li>
          </ul>
        </div>
      </section>

      <!-- Project Experience -->
      <section class="mb-12">
        <h2
          class="pb-2 mb-8 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          Project Experience
        </h2>

        <!-- Project 1 -->
        <div class="mb-12 last:mb-0">
          <div
            class="flex flex-col justify-between mb-3 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-2xl font-bold text-gray-900">
              Cross-Platform Social Media Automation System
            </h3>
            <span
              class="px-3 py-1 mt-2 text-sm font-medium text-gray-600 bg-gray-100 rounded sm:mt-0 w-fit"
              >Full-Stack</span
            >
          </div>

          <div class="p-4 mb-5 space-y-2 text-sm bg-gray-50 rounded-md">
            <div class="flex flex-col sm:flex-row sm:gap-2">
              <span
                class="font-bold text-gray-900 whitespace-nowrap min-w-[5rem]"
                >Impact:</span
              >
              <span class="text-gray-700"
                >Reduced manual workload by <strong>90%</strong>, supported
                <strong>50+ concurrent devices</strong>.</span
              >
            </div>
            <div class="flex flex-col mt-2 sm:flex-row sm:gap-2 sm:mt-0">
              <span
                class="font-bold text-gray-900 whitespace-nowrap min-w-[5rem]"
                >Tech Stack:</span
              >
              <span class="text-gray-700"
                >Python, Auto.js (JavaScript), Playwright, Qwen API, OCR/OpenCV,
                SSH automation, AdsPower</span
              >
            </div>
          </div>

          <div class="mb-6">
            <h4 class="mb-2 text-base font-bold text-gray-900">Overview</h4>
            <p class="text-gray-700">
              Designed and built a fully automated cross-platform content
              distribution and device-orchestration system.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <div>
              <h4
                class="mb-3 text-sm font-bold tracking-wide text-gray-900 uppercase"
              >
                Responsibilities & Achievements
              </h4>
              <ul
                class="pl-1 space-y-2 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
              >
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Designed real-device automation using Auto.js + Termux to
                  simulate real mobile behaviour.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Created a behavior simulation engine to reduce risk control
                  detection.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Integrated <strong>Qwen LLM</strong> with template system
                  for auto-generated localized content.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Built OCR-based anomaly detection: screenshots →
                  CAPTCHA/risk warning detection → automated recovery.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Implemented Python-based scheduler: concurrency, retries,
                  device health monitoring.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Integrated AdsPower API for multi-account isolation &
                  profile environment control.
                </li>
              </ul>
            </div>
            <div>
              <h4
                class="mb-3 text-sm font-bold tracking-wide text-gray-900 uppercase"
              >
                Results
              </h4>
              <ul
                class="pl-1 space-y-2 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
              >
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Stable concurrency across <strong>50+ devices</strong>
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />&gt; 95% task success rate
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />90%+ reduction in manual workload
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />10× improvement in content throughput
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Significantly higher account survival rate
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="pt-10 mb-12 border-t border-gray-100 last:mb-0">
          <div
            class="flex flex-col justify-between mb-2 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-2xl font-bold text-gray-900">
              NEWS Global Aggregator Platform
            </h3>
            <span
              class="px-3 py-1 mt-2 text-sm font-medium text-gray-600 bg-gray-100 rounded sm:mt-0 w-fit"
              >Full-Stack</span
            >
          </div>

          <div class="mb-4">
            <a
              href="https://www.antiquenews.xyz"
              target="_blank"
              class="flex items-center text-sm font-semibold text-blue-700 hover:underline"
            >
              <span class="mr-1">🔗</span> https://www.antiquenews.xyz
            </a>
          </div>

          <div class="p-4 mb-5 space-y-2 text-sm bg-gray-50 rounded-md">
            <div class="flex flex-col sm:flex-row sm:gap-2">
              <span
                class="font-bold text-gray-900 whitespace-nowrap min-w-[5rem]"
                >Impact:</span
              >
              <span class="text-gray-700"
                >AI-powered news system with automated pipelines & SEO-ready SSR
                rendering.</span
              >
            </div>
            <div class="flex flex-col mt-2 sm:flex-row sm:gap-2 sm:mt-0">
              <span
                class="font-bold text-gray-900 whitespace-nowrap min-w-[5rem]"
                >Tech Stack:</span
              >
              <span class="text-gray-700"
                >Next.js 14, React, TypeScript, Zustand, TailwindCSS, FastAPI,
                PostgreSQL, LLaMA, Docker</span
              >
            </div>
          </div>

          <div class="mb-6">
            <h4 class="mb-2 text-base font-bold text-gray-900">Overview</h4>
            <p class="text-gray-700">
              A fully automated global news pipeline:
              <strong
                >crawl → clean → store → summarize → search → SSR render</strong
              >
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <div>
              <h4
                class="mb-3 text-sm font-bold tracking-wide text-gray-900 uppercase"
              >
                Responsibilities & Achievements
              </h4>
              <ul
                class="pl-1 space-y-2 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
              >
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Designed complete Next.js + FastAPI architecture.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Built async crawler framework with dedupe, cleaning & task
                  scheduling.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Designed PostgreSQL schemas + async ORM for high-performance
                  pagination & search.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Integrated <strong>LLaMA</strong> for summarization, keyword
                  extraction, and title generation.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Implemented infinite scroll, filters, full-text search &
                  timeline view.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Built production deployment (Docker + Nginx + systemd).
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Implemented hybrid SSR/CSR for SEO.
                </li>
              </ul>
            </div>
            <div>
              <h4
                class="mb-3 text-sm font-bold tracking-wide text-gray-900 uppercase"
              >
                Results
              </h4>
              <ul
                class="pl-1 space-y-2 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
              >
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />40% faster first render
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Fully automated multi-source news generation
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Successfully indexed by Google
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Strong SEO performance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="pt-10 mb-12 border-t border-gray-100 last:mb-0">
          <div
            class="flex flex-col justify-between mb-3 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-2xl font-bold text-gray-900">
              Enterprise Management Systems (MES / WMS / OA / Smart Community)
            </h3>
            <span
              class="px-3 py-1 mt-2 text-sm font-medium text-gray-600 bg-gray-100 rounded sm:mt-0 w-fit"
              >Front-end</span
            >
          </div>

          <div class="p-4 mb-5 space-y-2 text-sm bg-gray-50 rounded-md">
            <div class="flex flex-col sm:flex-row sm:gap-2">
              <span
                class="font-bold text-gray-900 whitespace-nowrap min-w-[5rem]"
                >Impact:</span
              >
              <span class="text-gray-700"
                >Delivered stable enterprise modules with high reusability &
                strong permission control.</span
              >
            </div>
            <div class="flex flex-col mt-2 sm:flex-row sm:gap-2 sm:mt-0">
              <span
                class="font-bold text-gray-900 whitespace-nowrap min-w-[5rem]"
                >Tech Stack:</span
              >
              <span class="text-gray-700"
                >Vue.js, Vue-Router, ElementUI, Axios, Webpack, Apifox,
                MockJS</span
              >
            </div>
          </div>

          <div class="mb-6">
            <h4 class="mb-2 text-base font-bold text-gray-900">Overview</h4>
            <p class="text-gray-700">
              Built multiple enterprise-level ERP/OA systems with complex
              workflows & hierarchical permissions.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <div>
              <h4
                class="mb-3 text-sm font-bold tracking-wide text-gray-900 uppercase"
              >
                Responsibilities & Achievements
              </h4>
              <ul
                class="pl-1 space-y-2 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
              >
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Led frontend architecture planning, API standardization &
                  error-handling design.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Implemented Axios interceptors, global token injection,
                  permission checks & auto-recovery.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Built dynamic routing with role-based guards.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Developed reusable component library
                  (table/form/chart/dialog).
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Optimized Webpack: code-splitting, lazy-loading,
                  tree-shaking.
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />Built mock APIs via Apifox + MockJS for parallel
                  development.
                </li>
              </ul>
            </div>
            <div>
              <h4
                class="mb-3 text-sm font-bold tracking-wide text-gray-900 uppercase"
              >
                Results
              </h4>
              <ul
                class="pl-1 space-y-2 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
              >
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />+30% reusable component rate
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />-70% permission-related issues
                </li>
                <li>
                  <PointIcon
                    class="inline-block w-4 h-4 align-text-bottom"
                  />+20–25% development efficiency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="mb-12">
        <h2
          class="pb-2 mb-6 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          Work Experience
        </h2>
        <div>
          <div
            class="flex flex-col justify-between mb-2 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-xl font-bold text-gray-900">
              Independent Developer — Full-Stack Engineer
            </h3>
            <span class="font-medium text-gray-600">2023.06 – Present</span>
          </div>
          <ul
            class="pl-2 space-y-1 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
          >
            <li>
              <PointIcon
                class="inline-block w-4 h-4 align-text-bottom"
              />Providing full-stack development services for enterprise
              clients.
            </li>
            <li>
              <PointIcon
                class="inline-block w-4 h-4 align-text-bottom"
              />Frontend architecture, backend API development, database design.
            </li>
            <li>
              <PointIcon class="inline-block w-4 h-4 align-text-bottom" />Built
              multiple full-stack applications (news platform, automation
              system).
            </li>
            <li>
              <PointIcon
                class="inline-block w-4 h-4 align-text-bottom"
              />Implemented LLM integrations, local model deployment, and
              automation pipelines.
            </li>
          </ul>
        </div>
      </section>

      <!-- Internship -->
      <section class="mb-12">
        <h2
          class="pb-2 mb-6 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          Internship
        </h2>
        <div>
          <div
            class="flex flex-col justify-between mb-2 sm:flex-row sm:items-baseline"
          >
            <h3 class="text-xl font-bold text-gray-900">
              iFlytek Co., Ltd — Embedded Development Intern
            </h3>
            <span class="font-medium text-gray-600">2021.07 – 2021.09</span>
          </div>
          <ul
            class="pl-2 space-y-1 text-sm list-disc list-inside text-gray-700 marker:text-gray-400"
          >
            <li>
              <PointIcon
                class="inline-block w-4 h-4 align-text-bottom"
              />Integrated iFlytek speech-interaction SDK.
            </li>
            <li>
              <PointIcon
                class="inline-block w-4 h-4 align-text-bottom"
              />Participated in modular system design and cross-team
              collaboration.
            </li>
            <li>
              <PointIcon class="inline-block w-4 h-4 align-text-bottom" />Wrote
              test cases & performed performance/stability testing for speech
              modules.
            </li>
          </ul>
        </div>
      </section>

      <!-- Technical Skills -->
      <section>
        <h2
          class="pb-2 mb-6 text-lg font-bold tracking-wider text-gray-900 uppercase border-b border-gray-200"
        >
          Technical Skills
        </h2>
        <div class="grid gap-y-6 gap-x-12 sm:grid-cols-2">
          <div>
            <h4 class="mb-2 text-sm font-bold text-gray-900">Front-end</h4>
            <p class="text-sm text-gray-700">
              React · Next.js · Vue.js · TypeScript · Zustand · TailwindCSS
            </p>
          </div>
          <div>
            <h4 class="mb-2 text-sm font-bold text-gray-900">
              Backend / Full-Stack
            </h4>
            <p class="text-sm text-gray-700">
              FastAPI · PostgreSQL · Docker · Nginx · AsyncIO
            </p>
          </div>
          <div>
            <h4 class="mb-2 text-sm font-bold text-gray-900">LLM & AI</h4>
            <p class="text-sm text-gray-700">
              Qwen / LLaMA Integration · Local Model Deployment · Prompt
              Engineering
            </p>
          </div>
          <div>
            <h4 class="mb-2 text-sm font-bold text-gray-900">Automation</h4>
            <p class="text-sm text-gray-700">
              Auto.js · Playwright · OCR / OpenCV · Behavior Simulation ·
              Multi-device Control
            </p>
          </div>
          <div>
            <h4 class="mb-2 text-sm font-bold text-gray-900">DevOps</h4>
            <p class="text-sm text-gray-700">
              Linux · Docker · Uvicorn · systemd · CI/CD Automation
            </p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <div
        class="pt-8 mt-16 text-sm text-center text-gray-400 border-t border-gray-200"
      >
        <p>© {{ new Date().getFullYear() }} Wu Yunyu. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for static content
import PointIcon from "@/../public/svg/point.svg";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/pdf/WuYunyu_frontend_remote_25.11 (3).pdf";
  link.download = "WuYunyu_frontend_remote.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
/* Ensure print styles look good */
@media print {
  .min-h-screen {
    padding: 0;
    background: white;
  }
  .max-w-4xl {
    max-width: 100%;
    box-shadow: none;
    border: none;
    padding: 0;
  }
}
</style>
