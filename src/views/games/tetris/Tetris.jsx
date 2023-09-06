export default function Tetris() {
  function iframe() {
    return {
      __html:
        '<iframe src="../../../Standlone Games/Tetris/index.html" width="540" height="450"></iframe>',
    };
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={iframe()} />
    </div>
  );
}
