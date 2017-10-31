import React from 'react';
const ContestPreview = (contest) => (
  <div className="ContestPreview">
    <div>
      {contest.id}
    </div>
    <div>
      {contest.categoryName}
    </div>
    <div>
      {contest.contestName}
    </div>
  </div>
);
export default ContestPreview;
