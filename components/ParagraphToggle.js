import React, { useState } from 'https://esm.sh/react@18.2.0';

function ParagraphToggle({ paragraphs }) {
  const [showFull, setShowFull] = useState(false);

  // Функция для получения первого предложения из абзаца
  const getFirstSentence = (text) => {
    const match = text.match(/.*?\\./);
    return match ? match[0] : text;
  };

  return (
    <div className="space-y-4">
      {paragraphs.map((para, idx) => (
        <p key={idx} className="text-lg leading-relaxed">
          {showFull ? para : getFirstSentence(para)}
        </p>
      ))}
      <button
        className="btn"
        onClick={() => setShowFull(!showFull)}
        aria-expanded={showFull}
      >
        {showFull ? 'Показать меньше' : 'Показать подробнее'}
      </button>
    </div>
  );
}

export default ParagraphToggle;
