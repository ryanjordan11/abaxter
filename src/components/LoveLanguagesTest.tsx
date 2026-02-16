"use client";

import React, { useState } from 'react';

type LoveLanguageKey = 'WA' | 'AS' | 'RG' | 'QT' | 'PT';

interface LoveLanguage {
  name: string;
  desc: string;
}

interface LoveQuestion {
  id: number;
  A: { text: string; lang: LoveLanguageKey };
  B: { text: string; lang: LoveLanguageKey };
}

const LOVE_LANGUAGES: Record<LoveLanguageKey, LoveLanguage> = {
  WA: { name: 'Words of Affirmation', desc: 'Praise, reassurance, compliments, supportive words.' },
  AS: { name: 'Acts of Service', desc: 'Doing helpful things, easing your load, practical support.' },
  RG: { name: 'Receiving Gifts', desc: 'Thoughtful gifts, symbols of love, surprises with meaning.' },
  QT: { name: 'Quality Time', desc: 'Undivided attention, shared experiences, presence.' },
  PT: { name: 'Physical Touch', desc: 'Hugs, holding hands, closeness, affectionate touch.' }
};

const LOVE_QUESTIONS: LoveQuestion[] = [
  { id: 1, A: { text: 'I like to receive encouraging messages.', lang: 'WA' }, B: { text: 'I like long hugs.', lang: 'PT' } },
  { id: 2, A: { text: 'I feel loved when someone helps me with tasks.', lang: 'AS' }, B: { text: 'I feel loved when I get a thoughtful gift.', lang: 'RG' } },
  { id: 3, A: { text: 'I enjoy spending uninterrupted time together.', lang: 'QT' }, B: { text: 'I feel valued when someone compliments me.', lang: 'WA' } },
  { id: 4, A: { text: 'I feel close when holding hands or touching.', lang: 'PT' }, B: { text: 'I feel cared for when someone does something practical for me.', lang: 'AS' } },
  { id: 5, A: { text: 'I feel special when someone plans time just for us.', lang: 'QT' }, B: { text: 'I feel special when someone gives me a surprise gift.', lang: 'RG' } },
  { id: 6, A: { text: 'Kind words mean a lot to me.', lang: 'WA' }, B: { text: 'Physical closeness makes me feel secure.', lang: 'PT' } },
  { id: 7, A: { text: 'I feel loved when someone supports me with responsibilities.', lang: 'AS' }, B: { text: 'I feel loved when someone tells me they appreciate me.', lang: 'WA' } },
  { id: 8, A: { text: 'I prefer shared experiences over receiving things.', lang: 'QT' }, B: { text: 'I prefer meaningful gifts over shared activities.', lang: 'RG' } },
  { id: 9, A: { text: 'I feel connected through touch.', lang: 'PT' }, B: { text: 'I feel connected through conversation.', lang: 'QT' } },
  { id: 10, A: { text: 'It means a lot when someone remembers important dates.', lang: 'RG' }, B: { text: 'It means a lot when someone helps reduce my stress.', lang: 'AS' } },
  { id: 11, A: { text: 'I feel loved when someone says \"I\\'m proud of you.\"', lang: 'WA' }, B: { text: 'I feel loved when someone gives me a thoughtful present.', lang: 'RG' } },
  { id: 12, A: { text: 'I value undivided attention.', lang: 'QT' }, B: { text: 'I value affectionate touch.', lang: 'PT' } },
  { id: 13, A: { text: 'Acts of kindness speak louder than words.', lang: 'AS' }, B: { text: 'Compliments speak louder than actions.', lang: 'WA' } },
  { id: 14, A: { text: 'I\\'d rather spend meaningful time together.', lang: 'QT' }, B: { text: 'I\\'d rather receive something meaningful.', lang: 'RG' } },
  { id: 15, A: { text: 'I feel secure when physically close.', lang: 'PT' }, B: { text: 'I feel secure when someone verbally reassures me.', lang: 'WA' } }
];

const LoveLanguagesTest: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, LoveLanguageKey>>({});
  const [error, setError] = useState('');
  const [resultsVisible, setResultsVisible] = useState(false);
  const [resultsData, setResultsData] = useState<{
    entries: { key: LoveLanguageKey; value: number }[];
    primaryGroup: { key: LoveLanguageKey; value: number }[];
    secondaryGroup: { key: LoveLanguageKey; value: number }[];
  } | null>(null);

  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / LOVE_QUESTIONS.length) * 100);
  const canShowResults = answeredCount === LOVE_QUESTIONS.length;

  const onSelect = (qid: number, choice: 'A' | 'B') => {
    const question = LOVE_QUESTIONS.find((q) => q.id === qid);
    if (!question) return;
    const langKey = question[choice].lang;

    setAnswers((prev) => ({ ...prev, [qid]: langKey }));
    setError('');
  };

  const computeScores = () => {
    const scores: Record<LoveLanguageKey, number> = { WA: 0, AS: 0, RG: 0, QT: 0, PT: 0 };
    Object.values(answers).forEach((key) => {
      scores[key] += 1;
    });
    return scores;
  };

  const rankScores = (scores: Record<LoveLanguageKey, number>) => {
    const entries = (Object.entries(scores) as [LoveLanguageKey, number][])
      .map(([key, value]) => ({ key, value }))
      .sort((a, b) => b.value - a.value);

    const max = entries[0]?.value ?? 0;
    const primaryGroup = entries.filter((entry) => entry.value === max);
    const nextVal = entries.find((entry) => entry.value < max)?.value;
    const secondaryGroup = nextVal === undefined ? [] : entries.filter((entry) => entry.value === nextVal);

    return { entries, primaryGroup, secondaryGroup };
  };

  const showResults = () => {
    if (!canShowResults) {
      setError('Answer every question before getting results.');
      return;
    }

    const scores = computeScores();
    const ranked = rankScores(scores);
    setResultsData(ranked);
    setResultsVisible(true);
  };

  const resetAll = () => {
    setAnswers({});
    setError('');
    setResultsVisible(false);
    setResultsData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryNames = resultsData?.primaryGroup.map((entry) => LOVE_LANGUAGES[entry.key].name).join(' / ') ?? '';
  const secondaryNames = resultsData?.secondaryGroup.length
    ? resultsData.secondaryGroup.map((entry) => LOVE_LANGUAGES[entry.key].name).join(' / ')
    : '-';

  const tiePrimary = (resultsData?.primaryGroup.length ?? 0) > 1;
  const tieSecondary = (resultsData?.secondaryGroup.length ?? 0) > 1;
  const tieNote = tiePrimary && tieSecondary
    ? 'Ties detected for primary and secondary languages.'
    : tiePrimary
      ? 'Tie detected for primary love language.'
      : tieSecondary
        ? 'Tie detected for secondary love language.'
        : '';

  return (
    <section className="love-test">
      <div className="wrap">
        <div className="header">
          <div>
            <h1>5 Love Languages Test</h1>
            <p className="sub">
              Pick <b>one</b> option per question - the one that feels more meaningful to you in a relationship.
              When finished, click <b>Get Results</b>.
            </p>
          </div>
          <div className="pill" id="statusPill">Answered: <span>{answeredCount}</span>/<span>{LOVE_QUESTIONS.length}</span></div>
          <div className="progress" aria-label="Progress">
            <div className="bar" style={{ width: `${progressPct}%` }}></div>
          </div>
        </div>

        <div className="panel" id="quiz">
          {LOVE_QUESTIONS.map((q) => (
            <div className="q" id={`q-${q.id}`} key={q.id}>
              <div className="qhead">
                <div className="qnum">Q{q.id}</div>
                <div className="qtext">Choose one:</div>
              </div>
              <div className="choices">
                <label className="choice">
                  <input
                    type="radio"
                    name={`q_${q.id}`}
                    value="A"
                    checked={answers[q.id] === q.A.lang}
                    onChange={() => onSelect(q.id, 'A')}
                  />
                  <div><b>A.</b> {q.A.text}</div>
                </label>
                <label className="choice">
                  <input
                    type="radio"
                    name={`q_${q.id}`}
                    value="B"
                    checked={answers[q.id] === q.B.lang}
                    onChange={() => onSelect(q.id, 'B')}
                  />
                  <div><b>B.</b> {q.B.text}</div>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="ctas">
          <button id="resetBtn" type="button" onClick={resetAll}>Reset</button>
          <button
            id="resultsBtn"
            className="primary"
            type="button"
            disabled={!canShowResults}
            onClick={showResults}
          >
            Get Results
          </button>
        </div>

        <div className={`error ${error ? '' : 'hidden'}`} id="errorBox">{error}</div>

        <div className={`panel results ${resultsVisible ? '' : 'hidden'}`} id="resultsPanel">
          <div className="topline" id="topline">
            <div><strong>Primary:</strong> {primaryNames}</div>
            <div style={{ marginTop: 6 }}><strong>Secondary:</strong> {secondaryNames}</div>
          </div>
          <div className="grid" id="scoresGrid">
            {resultsData?.entries.map((entry, idx) => (
              <div className="card" key={entry.key}>
                <h3>#{idx + 1} - {LOVE_LANGUAGES[entry.key].name}</h3>
                <div className="score">{entry.value}</div>
                <div className="rank">{LOVE_LANGUAGES[entry.key].desc}</div>
              </div>
            ))}
          </div>
          <div className="small" id="tieNote">{tieNote}</div>
        </div>

        <div className="footer">
          Languages scored: Words of Affirmation, Acts of Service, Receiving Gifts, Quality Time, Physical Touch.
        </div>
      </div>
    </section>
  );
};

export default LoveLanguagesTest;
