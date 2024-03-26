interface ScoreProps {
  currentScore: number;
  totalScore: number;
}

const Score: React.FC<ScoreProps> = ({ currentScore, totalScore }) => {
  return (
    <div>
      <b>Score</b> : {currentScore}/{totalScore}
    </div>
  );
};

export default Score;
