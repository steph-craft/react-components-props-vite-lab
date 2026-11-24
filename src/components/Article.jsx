import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let minutesIndicator = null;

  if (minutes !== undefined) {
    if (minutes < 30) {
      minutesIndicator = "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    } else {
      minutesIndicator = "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutesIndicator ? <small> {minutesIndicator}</small> : null}
      <p>{preview}</p>
    </article>
  );
}

export default Article;