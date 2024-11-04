import React, { useState } from "react";

function States() {
  const [united, setUnited] = useState(false);
  return (
    <div>
      <p hidden={united}>This is a simple component with no props.</p>

      <button onClick={() => setUnited(!united)}>Flip message</button>
    </div>
  );
}

export default States;
