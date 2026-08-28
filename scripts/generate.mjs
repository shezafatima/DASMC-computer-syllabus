import fs from 'fs';
import path from 'path';
import {
  grades,
  programThemes,
  programGoals,
  miniProjectModel,
  finalAssessment,
  finalProjectExpectations,
  themeIcons,
} from './data.mjs';

const DOCS = path.resolve('docs');

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[→&]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('wrote', path.relative(process.cwd(), filePath));
}

function frontMatter({title, sidebar_label, sidebar_position, description}) {
  const lines = ['---'];
  lines.push(`title: ${JSON.stringify(title)}`);
  if (sidebar_label) lines.push(`sidebar_label: ${JSON.stringify(sidebar_label)}`);
  if (sidebar_position !== undefined) lines.push(`sidebar_position: ${sidebar_position}`);
  if (description) lines.push(`description: ${JSON.stringify(description)}`);
  lines.push('---');
  return lines.join('\n');
}

function bulletList(items) {
  return items.map((i) => `- ${i}`).join('\n');
}

// ---------- Introduction ----------

function genProgramGoals() {
  const fm = frontMatter({
    title: 'Program Goals',
    sidebar_position: 1,
    description: 'Goals of the Digital & Future Skills Program at Dar-e-Arqam Metrville Campus.',
  });
  const content = `${fm}

# Program Goals

**Digital & Future Skills Program**
Computer Education Syllabus | Grades 2–7
*Practical • Creative • Computational • AI-Aware*

Dar-e-Arqam Metrville Campus's Digital & Future Skills Program guides students from
first contact with a computer in Grade 2 through to independent, AI-aware digital
creation in Grade 7. The program is built around six goals:

${bulletList(programGoals)}

Every grade has a complete, standalone syllabus (see the sidebar), with depth and
complexity increasing year over year across eight consistent themes — explore them
on the [Theme Overview](./theme-overview) page, or jump straight to the
[Curriculum Map](/curriculum-map) to see how each theme evolves across grades.

<CardGrid>
  <Card to="/grade-2/overview" icon="🖥️" title="Grade 2" subtitle="Computer Discovery" />
  <Card to="/grade-3/overview" icon="🧭" title="Grade 3" subtitle="Digital Explorer" />
  <Card to="/grade-4/overview" icon="🎬" title="Grade 4" subtitle="Digital Creator" />
  <Card to="/grade-5/overview" icon="🧩" title="Grade 5" subtitle="Digital Problem Solver" />
  <Card to="/grade-6/overview" icon="🏗️" title="Grade 6" subtitle="Digital Builder" />
  <Card to="/grade-7/overview" icon="🚀" title="Grade 7" subtitle="Digital Innovator" />
</CardGrid>
`;
  write(path.join(DOCS, 'introduction', 'program-goals.mdx'), content);
}

function genThemeOverview() {
  const fm = frontMatter({
    title: 'Theme Overview',
    sidebar_position: 2,
    description: 'The eight core themes that run through every grade of the syllabus.',
  });
  const rows = programThemes
    .map((t) => `| ${t.icon} **${t.theme}** | ${t.coverage} |`)
    .join('\n');
  const content = `${fm}

# Theme Overview

Eight core themes run through every grade of the Digital & Future Skills Program.
Each grade covers all eight, with age-appropriate depth — so a parent or teacher can
always find "where Scratch is this year" or "what AI looks like at this grade" using
the same structure, from Grade 2 to Grade 7.

| Theme | Core Coverage |
|---|---|
${rows}

Want to see how a specific theme, like Scratch or AI, changes from Grade 2 through
Grade 7? Check the [Curriculum Map](/curriculum-map).
`;
  write(path.join(DOCS, 'introduction', 'theme-overview.mdx'), content);
}

// ---------- Grades ----------

function genGrade(grade) {
  const base = path.join(DOCS, `grade-${grade.number}`);

  // Overview page
  const sectionLinks = grade.sections
    .map((s) => {
      const icon = themeIcons[s.title] || '📘';
      return `  <Card to="./${slugify(s.title)}" icon="${icon}" title="${s.title}" />`;
    })
    .join('\n');

  const overviewFm = frontMatter({
    title: `Grade ${grade.number} — ${grade.title}`,
    sidebar_label: 'Overview',
    sidebar_position: 1,
    description: grade.blurb,
  });
  const overviewContent = `${overviewFm}

<GradeHero grade={${grade.number}} title="${grade.title}" blurb="${grade.blurb.replace(/"/g, '\\"')}" />

This page is the starting point for the complete Grade ${grade.number} syllabus.
Every theme below has its own page with the full list of topics covered this year,
and the grade closes out with its Mini Projects and Final Project.

<CardGrid>
${sectionLinks}
  <Card to="./mini-projects" icon="🎯" title="Mini Projects" />
  <Card to="./final-project" icon="🏆" title="Final Project" />
</CardGrid>
`;
  write(path.join(base, 'overview.mdx'), overviewContent);

  // Section pages
  grade.sections.forEach((section, idx) => {
    const icon = themeIcons[section.title] || '📘';
    const fm = frontMatter({
      title: section.title,
      sidebar_position: idx + 2,
      description: `Grade ${grade.number} (${grade.title}) — ${section.title}.`,
    });

    const summaryList = section.items.map((i) => `- **${i.topic}**`).join('\n');

    let diagramContent = '';
    if (section.diagram) {
      diagramContent = `
\`\`\`mermaid
${section.diagram.mermaid}
\`\`\`
*${section.diagram.caption}*
`;
    }
    
    const conceptTopics = section.items.filter(i => i.type === 'concept');
    let flashcardsContent = '';
    if (conceptTopics.length > 0) {
      const cardsObj = conceptTopics.map(c => ({
        front: c.topic,
        back: c.definition.split('.')[0] + '.' // Trim to first sentence
      }));
      flashcardsContent = `## Review\n\n<FlashcardDeck cards={${JSON.stringify(cardsObj)}} />`;
    }

    const details = section.items
      .map((i) => {
        if (i.type === 'concept') {
          return `### 💡 ${i.topic}

**Concept:** ${i.definition}

**Example:** ${i.example}

${i.whyItMatters ? `**Why it matters:** ${i.whyItMatters}\n\n` : ''}${i.funFactOrMisconception ? `**Did you know?** ${i.funFactOrMisconception}` : ''}`;
  } else if (i.type === 'steps') {
          const stepsList = i.steps.map((step, sIdx) => {
            if (typeof step === 'string') return `${sIdx + 1}. ${step}`;
            return `${sIdx + 1}. **${step.action}** ${step.detail}`;
          }).join('\n');
          return `### ⚙️ ${i.topic}

${i.intro ? `*${i.intro}*\n\n` : ''}${stepsList}${i.tip ? `\n\n💡 **Tip:** ${i.tip}` : ''}`;
        } else {
          return `### ${i}`;
        }
      })
      .join('\n\n---\n\n');

    const content = `${fm}

# ${icon} ${section.title}

*Grade ${grade.number} — ${grade.title}*

${diagramContent}

Topics covered this grade:

${summaryList}

---

${details}

${flashcardsContent}
`;
    write(path.join(base, `${slugify(section.title)}.mdx`), content);
  });

  // Mini projects page
  const miniFm = frontMatter({
    title: 'Mini Projects',
    sidebar_position: grade.sections.length + 2,
    description: `Grade ${grade.number} mini projects.`,
  });
  const miniContent = `${miniFm}

# Mini Projects — Grade ${grade.number}

<ProjectCallout type="mini">

${bulletList(grade.miniProjects)}

</ProjectCallout>

Each mini project is short enough to complete within the teaching schedule and
directly reinforces the theme it follows. See the general
[Mini Project Model](/assessment-and-projects/mini-project-model) for how these are
scoped across every theme.
`;
  write(path.join(base, 'mini-projects.mdx'), miniContent);

  // Final project page
  const finalFm = frontMatter({
    title: 'Final Project',
    sidebar_position: grade.sections.length + 3,
    description: `Grade ${grade.number} final project.`,
  });
  const finalContent = `${finalFm}

# Final Project — Grade ${grade.number}

<ProjectCallout type="final">

${grade.finalProject}

</ProjectCallout>

The final project should be age-appropriate and manageable. Students plan, create,
test, improve and present their work — individually or in small groups, depending on
the school environment. See
[Final Project Expectations](/assessment-and-projects/final-project-expectations) for
how this compares across all six grades, and
[Final Assessment](/assessment-and-projects/final-assessment) for how it's graded.
`;
  write(path.join(base, 'final-project.mdx'), finalContent);
}

// ---------- Curriculum Map ----------

function genCurriculumMap() {
  const allThemeTitles = [
    'Computer Foundations',
    'Office Productivity',
    'Internet & Digital Citizenship / Awareness',
    'Canva & Creativity',
    'Scratch & Logic / Computational Thinking',
    'Web Fundamentals / Development',
    'AI Awareness / Foundations / Productivity Tools',
  ];

  const matchers = [
    (s) => s.title === 'Computer Foundations',
    (s) => s.title === 'Office Productivity',
    (s) => s.title.startsWith('Internet'),
    (s) => s.title.startsWith('Canva'),
    (s) => s.title.startsWith('Scratch'),
    (s) => s.title.startsWith('Web'),
    (s) => s.title.startsWith('AI'),
  ];

  const header = `| Theme | ${grades.map((g) => `Grade ${g.number}`).join(' | ')} |`;
  const divider = `|---|${grades.map(() => '---').join('|')}|`;

  const rows = allThemeTitles.map((themeLabel, rowIdx) => {
    const matcher = matchers[rowIdx];
    const cells = grades.map((g) => {
      const section = g.sections.find(matcher);
      if (!section) return '—';
      const link = `/grade-${g.number}/${slugify(section.title)}`;
      return `[✓](${link})`;
    });
    return `| ${themeLabel} | ${cells.join(' | ')} |`;
  });

  const fm = frontMatter({
    title: 'Curriculum Map',
    sidebar_position: 8,
    description: 'A theme-by-grade map of the full Digital & Future Skills syllabus.',
  });

  const content = `${fm}

# Curriculum Map

A quick, at-a-glance view of which themes are covered in which grade. Every checkmark
links straight to that grade's page for the theme, so you can compare how a subject
like Scratch or AI develops from Grade 2 through Grade 7.

${header}
${divider}
${rows.join('\n')}

Note: Grade 2 also includes a standalone **Digital Skills** section (file awareness,
saving/opening work, classroom digital rules) that isn't repeated as its own theme in
later grades — it's folded into Computer Foundations from Grade 3 onward. Web
Fundamentals / Development is introduced from **Grade 6** onward.

For the full topic list behind each checkmark, open the grade's page directly, or
start from [Grade 2](/grade-2/overview) and read the syllabus in order.
`;
  write(path.join(DOCS, 'curriculum-map.mdx'), content);
}

// ---------- Assessment & Projects ----------

function genMiniProjectModel() {
  const fm = frontMatter({
    title: 'Mini Project Model',
    sidebar_position: 1,
    description: 'How mini projects are scoped across every theme, every grade.',
  });
  const rows = miniProjectModel.map((m) => `| **${m.area}** | ${m.task} |`).join('\n');
  const content = `${fm}

# Mini Project Model

Each major topic should conclude with a small practical task or mini project.
Projects should be short enough to complete within the teaching schedule and should
reinforce the skill just learned.

| Area | Task |
|---|---|
${rows}
`;
  write(path.join(DOCS, 'assessment-and-projects', 'mini-project-model.mdx'), content);
}

function genFinalAssessment() {
  const fm = frontMatter({
    title: 'Final Assessment',
    sidebar_position: 2,
    description: 'Grading breakdown for the Digital & Future Skills Program.',
  });
  const rows = finalAssessment.map((f) => `| ${f.component} | **${f.weight}** |`).join('\n');
  const content = `${fm}

# Final Assessment

| Component | Weight |
|---|---|
${rows}

The final online MCQ exam should cover the complete syllabus of the student's grade
and may include concept, scenario, image-based and practical-thinking questions. A
suggested length is 40–50 questions.
`;
  write(path.join(DOCS, 'assessment-and-projects', 'final-assessment.mdx'), content);
}

function genFinalProjectExpectations() {
  const fm = frontMatter({
    title: 'Final Project Expectations',
    sidebar_position: 3,
    description: 'What a strong final project looks like at each grade.',
  });
  const rows = finalProjectExpectations
    .map((f) => `| [Grade ${f.grade}](/grade-${f.grade}/final-project) | ${f.expectation} |`)
    .join('\n');
  const content = `${fm}

# Final Project Expectations

The final project should be age-appropriate and manageable. Students should plan,
create, test, improve and present their work. Individual or small-group projects may
be used depending on the school environment.

| Grade | Expectation |
|---|---|
${rows}
`;
  write(path.join(DOCS, 'assessment-and-projects', 'final-project-expectations.mdx'), content);
}

// ---------- Run ----------

genProgramGoals();
genThemeOverview();
grades.forEach(genGrade);
genCurriculumMap();
genMiniProjectModel();
genFinalAssessment();
genFinalProjectExpectations();

console.log('\nDone.');
