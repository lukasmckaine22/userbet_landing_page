import React from "react";
import { useParams } from "react-router-dom";

function PickupDraft() {
  const { id } = useParams();

  // Now you can use the ID for whatever you need
  // ...

  return <div>PickupDraft page</div>;
}

export default PickupDraft;
