import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {CardGrid, Card} from '@site/src/components/CardGrid';
import styles from './index.module.css';

const grades = [
  {number: 2, title: 'Computer Discovery', icon: '🖥️'},
  {number: 3, title: 'Digital Explorer', icon: '🧭'},
  {number: 4, title: 'Digital Creator', icon: '🎬'},
  {number: 5, title: 'Digital Problem Solver', icon: '🧩'},
  {number: 6, title: 'Digital Builder', icon: '🏗️'},
  {number: 7, title: 'Digital Innovator', icon: '🚀'},
];

const themes = [
  {icon: '🖥️', title: 'Computer Foundations'},
  {icon: '📊', title: 'Office Productivity'},
  {icon: '🌐', title: 'Internet & Digital Citizenship'},
  {icon: '🎨', title: 'Canva & Digital Creativity'},
  {icon: '🐱', title: 'Scratch & Computational Thinking'},
  {icon: '🤖', title: 'AI & Productivity Tools'},
  {icon: '🕸️', title: 'Web & Digital Building'},
  {icon: '🚀', title: 'Innovation & Projects'},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img src="/img/logo.svg" alt="Dar-e-Arqam Metroville Campus" className={styles.heroLogo} />
        <h1 className={styles.heroTitle}>Digital &amp; Future Skills Program</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroBlurb}>
          A complete, standalone computer education syllabus for Grades 2–7 — practical
          office skills, Canva design, Scratch programming, internet &amp; digital
          citizenship, and age-appropriate AI literacy, all in one place.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--secondary button--lg" to="/grade-2/overview">
            Start at Grade 2
          </Link>
          <Link className="button button--primary button--lg" to="/curriculum-map">
            View Curriculum Map
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Browse by Grade</h2>
            <p className={styles.sectionLead}>
              Each grade is a complete, self-contained chapter — start anywhere, or work
              through Grade 2 to Grade 7 in order.
            </p>
            <CardGrid>
              {grades.map((g) => (
                <Card
                  key={g.number}
                  to={`/grade-${g.number}/overview`}
                  icon={g.icon}
                  title={`Grade ${g.number}`}
                  subtitle={g.title}
                />
              ))}
            </CardGrid>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Eight Core Themes</h2>
            <p className={styles.sectionLead}>
              Every grade covers the same eight themes, with depth increasing year over
              year. See the full breakdown on the{' '}
              <Link to="/introduction/theme-overview">Theme Overview</Link> page.
            </p>
            <CardGrid>
              {themes.map((t) => (
                <Card key={t.title} icon={t.icon} title={t.title} />
              ))}
            </CardGrid>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Program Resources</h2>
            <CardGrid>
              <Card
                to="/introduction/program-goals"
                icon="🎯"
                title="Program Goals"
                subtitle="What the program aims to build"
              />
              <Card
                to="/curriculum-map"
                icon="🗺️"
                title="Curriculum Map"
                subtitle="Themes across all six grades"
              />
              <Card
                to="/assessment-and-projects/final-assessment"
                icon="📝"
                title="Final Assessment"
                subtitle="Grading breakdown"
              />
              <Card
                to="/assessment-and-projects/final-project-expectations"
                icon="🏆"
                title="Final Project Expectations"
                subtitle="What's expected at each grade"
              />
            </CardGrid>
          </div>
        </section>
      </main>
    </Layout>
  );
}
