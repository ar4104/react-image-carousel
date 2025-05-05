const e = React.createElement;

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function handleClick() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return e(
    'div',
    { style: { textAlign: 'center' } },
    e('img', {
      src: images[currentIndex],
      alt: `Image ${currentIndex + 1}`,
      style: {
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        maxWidth: '100%',
        height: 'auto',
      },
      onClick: handleClick,
    })
  );
}

const images = [
  "https://picsum.photos/id/1011/400/300",
  "https://picsum.photos/id/1012/400/300",
  "https://picsum.photos/id/1013/400/300",
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1018/400/300",
  "https://picsum.photos/id/1019/400/300",
  "https://picsum.photos/id/1020/400/300",
  "https://picsum.photos/id/1021/400/300",
  "https://picsum.photos/id/1022/400/300"
];

function App() {
  return e(
    'div',
    { style: { maxWidth: '64rem', margin: '0 auto', padding: '2rem 1rem' } },
    e('h1', { style: { fontSize: '1.875rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' } }, 'Индивидуальное задание №2'),
    e(
      'section',
      null,
      e('h2', { style: { fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' } }, 'Компонент с циклом из 10 картинок'),
      e(ImageCarousel, { images })
    )
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.createRoot(domContainer).render(e(App));
