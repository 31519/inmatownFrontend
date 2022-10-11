import React from "react";

function RichText({datas}) {
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div>
      {datas.content && (
        <div dangerouslySetInnerHTML={createMarkup(datas.content)} />
      )}
    </div>
  );
}

export default RichText;
